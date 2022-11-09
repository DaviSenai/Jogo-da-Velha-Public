import { Component, OnInit } from '@angular/core';

export let jogadorAtual = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nomeJogadorAtual:string = "Romario";
  
  title = 'Jogo-da-Velha';
  
  
  
  
}