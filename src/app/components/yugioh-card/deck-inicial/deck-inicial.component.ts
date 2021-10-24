import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck-inicial',
  templateUrl: './deck-inicial.component.html',
  styleUrls: ['./deck-inicial.component.css']
})
export class DeckInicialComponent implements OnInit {
 
  firstDecks: any = [
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Ataque link 2017.png',
      name: 'Ataque link 2017',
      price: 'R$ 79,90',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
