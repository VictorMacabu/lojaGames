import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duel-decks',
  templateUrl: './duel-decks.component.html',
  styleUrls: ['./duel-decks.component.css']
})
export class DuelDecksComponent implements OnInit {

  dualDecks:any=[
    {
      tipe: 'Duel Decks',
      pathImage: 'assets/imgMagic/duel_decks/MAGIC ARENA KIT INICIAL COLEÇÃO BÁSICA 2021 M21.png',
      name: 'MAGIC ARENA KIT INICIAL COLEÇÃO BÁSICA 2021 M21',
      price: 'R$ 79,90',
    },
    {
      tipe: 'Duel Decks',
      pathImage: 'assets/imgMagic/duel_decks/MAGIC ARENA KIT INICIAL STARTER DECK 2021.png',
      name: 'MAGIC ARENA KIT INICIAL STARTER DECK 2021',
      price: 'R$ 65,90',
    },
    {
      tipe: 'Duel Decks',
      pathImage: 'assets/imgMagic/duel_decks/MAGIC THE GATHERING GLOBAL SERIES JIANG YANGGU VS MU YANLING.png',
      name: 'MAGIC THE GATHERING GLOBAL SERIES JIANG YANGGU VS MU YANLING',
      price: 'R$ 139,90',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
