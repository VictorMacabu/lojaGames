import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  imagePath: String = "gs://lojagames-tecemergentes.appspot.com/cardGames/Pokemon/Blister/BLISTER QUADRUPLO POKEMON - ESTILOS DE BATALHA ESPADA E ESCUDO 5 EEVEE.png";

  constructor() { }

  ngOnInit(): void {
  }

}
