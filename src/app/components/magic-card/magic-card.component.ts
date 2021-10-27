import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-card',
  templateUrl: './magic-card.component.html',
  styleUrls: ['./magic-card.component.css']
})
export class MagicCardComponent implements OnInit {

  lugares: any = [
    { 
      tipe: 'Box Booster',
      pathImage: 'assets/imgMagic/booster/MAGIC CAIXA DE BOOSTER COLEÇÃO BÁSICA 2021 CORE SET M21.png',
      router: '/cardGame/magic/booster',
    },
    {
      tipe: 'Bundle',
      pathImage: 'assets/imgMagic/bundle/MAGIC BUNDLE COLEÇÃO BASICA 2020 CORE SET M20 PACOTE.png',
      router: '/cardGame/magic/bundle',
    },
    {
      tipe: 'Deck Pronto',
      pathImage: 'assets/imgMagic/deck_pronto/MAGIC DECK PRE CONSTRUIDO BATALHÃO ALVORECER MOURNINGTIDE.png',
      name: 'BATALHÃO ALVORECER MOURNINGTIDE',
      router: '/cardGame/magic/deck_pronto',
    },
    {
      tipe: 'Duel Decks',
      pathImage: 'assets/imgMagic/duel_decks/MAGIC ARENA KIT INICIAL COLEÇÃO BÁSICA 2021 M21.png',
      router: '/cardGame/magic/duel_decks',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
