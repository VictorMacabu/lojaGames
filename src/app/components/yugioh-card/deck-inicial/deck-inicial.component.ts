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
      price: 'R$ 49,90',
    },
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Decifrador de codigos 2018.png',
      name: 'Decifrador de codigos 2018',
      price: 'R$ 39,90',
    },
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Duelistas do amanhã.png',
      name: 'Duelistas do amanhã',
      price: 'R$ 55,90',
    },
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Kaiba Reloaded starter.png',
      name: 'Kaiba Reloaded starter',
      price: 'R$ 64,90',
    },
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Marik e Bakura Pesadelos pertubadores.png',
      name: 'Marik e Bakura Pesadelos pertubadores',
      price: 'R$ 64,90',
    },
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Mestres do destino.png',
      name: 'Mestres do destino',
      price: 'R$ 59,90',
    },
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Predadores definitivos .png',
      name: 'Predadores definitivos ',
      price: 'R$ 55,90',
    },
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Reloaded starter.png',
      name: 'Yugi Reloaded starter',
      price: 'R$ 69,90',
    },
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Yugi Pegasus Partida do milenio.png',
      name: 'Yugi Pegasus Partida do milenio',
      price: 'R$ 75,90',
    },
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/YUYA 2016.png',
      name: 'YUYA 2016',
      price: 'R$ 39,90',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
