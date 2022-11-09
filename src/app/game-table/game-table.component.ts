import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {

  ngOnInit(): void {
    if (Storage.get("data") == null) {
      let placar = {xPoints: 0, oPoints: 0}
      Storage.set("data", placar)
    }
  }

  tableValues:string[] = ["","","","","","","","","",""]

  currentPlayer:string = "X"
  winner:string = ""
  xPoints:number = 0;
  oPoints:number = 0;

  
  refreshTable(n:number) {
    
    if (this.tableValues[n-1] != "" || this.winner != "") {
      return
    }
    this.tableValues[n-1] = this.currentPlayer
    let td = document.querySelectorAll("td")[n-1];
    if (this.currentPlayer == "X") {
      td.innerText = "X"
      td.style.background = "#0767f7"
    } else {
      td.innerText = "O"
      td.style.background = "#ffcc00"
    }
    td.style.cursor="no-drop"
    
    if (this.winnerVerify()) {
      this.winner = this.currentPlayer
      
      let temp = Storage.get("data")
      if (this.winner === "X") {
        this.xPoints++
        temp.xPoints = this.xPoints
      } else if (this.winner === "O") {
        this.oPoints++
        temp.oPoints = this.oPoints
      }
      document.querySelectorAll("#vitorias span")[0].innerHTML = this.xPoints + ""
      document.querySelectorAll("#vitorias span")[1].innerHTML = this.oPoints + ""

    }
    
    let hasAvailableSpace:boolean = false;
    for (let i = 0; i < this.tableValues.length; i++) {
      if (this.tableValues[i] === "") {
        console.log(this.tableValues[i])
        hasAvailableSpace = true
        break
      }
    }
    
    console.log(hasAvailableSpace)
    if (!hasAvailableSpace) {
      this.winner = "Empate"
    }

    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X"
    document.querySelector("#table-container span").innerHTML = this.currentPlayer
  }
  
  winnerVerify():boolean {
    console.log(this.currentPlayer)
    console.log(this.tableValues)
    if ( 
      (this.tableValues[0] === this.currentPlayer && this.tableValues[1] === this.currentPlayer && this.tableValues[2] === this.currentPlayer) ||
      (this.tableValues[3] === this.currentPlayer && this.tableValues[4] === this.currentPlayer && this.tableValues[5] === this.currentPlayer) ||
      (this.tableValues[6] === this.currentPlayer && this.tableValues[7] === this.currentPlayer && this.tableValues[8] === this.currentPlayer) ||

      (this.tableValues[0] === this.currentPlayer && this.tableValues[3] === this.currentPlayer && this.tableValues[6] === this.currentPlayer) ||
      (this.tableValues[1] === this.currentPlayer && this.tableValues[4] === this.currentPlayer && this.tableValues[7] === this.currentPlayer) ||
      (this.tableValues[2] === this.currentPlayer && this.tableValues[5] === this.currentPlayer && this.tableValues[8] === this.currentPlayer) ||

      (this.tableValues[0] === this.currentPlayer && this.tableValues[4] === this.currentPlayer && this.tableValues[8] === this.currentPlayer) ||
      (this.tableValues[2] === this.currentPlayer && this.tableValues[4] === this.currentPlayer && this.tableValues[6] === this.currentPlayer)
    ) return true
    
    return false
  }

  restart() {
    this.winner = ""
    this.tableValues = ["","","","","","","","","",""]
    let tds = document.querySelectorAll("td")
    for (let i = 0; i < tds.length; i++) {
      tds[i].innerHTML = ""
      tds[i].style.background = ""
      tds[i].style.cursor =""
    }
  }

  
}

const Storage = {
  get(key) {
    return JSON.parse(window.localStorage.getItem(key))
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}