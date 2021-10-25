import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck-pronto',
  templateUrl: './deck-pronto.component.html',
  styleUrls: ['./deck-pronto.component.css']
})
export class DeckProntoComponent implements OnInit {

  decksProntos: any =[
    {
      tipe: 'Deck Pronto',
      pathImage: 'assets/imgMagic/deck_pronto/MAGIC DECK PRE CONSTRUIDO BATALHÃO ALVORECER MOURNINGTIDE.png',
      name: 'BATALHÃO ALVORECER MOURNINGTIDE',
      price: 'R$ 59,90',
    },
    {
      tipe: 'Deck Pronto',
      pathImage: 'assets/imgMagic/deck_pronto/MAGIC DECK PRE CONSTRUIDO CODIGO DO GUERREIRO DO ALVORECER.png',
      name: 'CODIGO DO GUERREIRO DO ALVORECER',
      price: 'R$ 59,90',
    },
    {
      tipe: 'Deck Pronto',
      pathImage: 'assets/imgMagic/deck_pronto/MAGIC DECK PRE CONSTRUIDO ESTILO LADINO ALVORECER.png',
      name: 'ESTILO LADINO ALVORECER',
      price: 'R$ 59,90',
    },
    {
      tipe: 'Deck Pronto',
      pathImage: 'assets/imgMagic/deck_pronto/MAGIC DECK PRE CONSTRUIDO XAMARISMO ALVORECER MOURNINGTIDE.png',
      name: 'XAMARISMO ALVORECER MOURNINGTIDE',
      price: 'R$ 59,90',
    },
    {
      tipe: 'Deck Pronto',
      pathImage: 'assets/imgMagic/deck_pronto/MAGIC DECK PRE CONSTRUIDO SENTENÇA SUSPENSA VISÃO DO FUTURO.png',
      name: 'SENTENÇA SUSPENSA VISÃO DO FUTURO',
      price: 'R$ 69,90',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
