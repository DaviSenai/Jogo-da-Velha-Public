import { Component, Input, OnInit } from '@angular/core';
import { jogadorAtual } from '../app.component';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent {

  tableValues:string[] = ["","","","","","","","",""]


  refreshTable(n:number) {
    if (this.tableValues[n] != "") {
      return;
    }
    let td = document.querySelectorAll("td")[n-1];
    if (jogadorAtual === 1) {
      td.innerText = "X"
      td.style.background = "#0767f7"
    } else {
      td.innerText = "O"
      td.style.background = "#ffcc00"
    }
    td.style.cursor="no-drop"

    // console.log("x: " + x + " y: " + y);
  }

}
