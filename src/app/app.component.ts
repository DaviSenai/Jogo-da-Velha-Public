import { Component, OnInit } from '@angular/core';
import { Storage } from './game-table/game-table.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Jogo-da-Velha';

  resetPlacar() {
    let placar = {xPoints: 0, oPoints: 0}
    Storage.set("data", placar)
    location.reload()
  }
}
