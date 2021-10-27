import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yugioh-card',
  templateUrl: './yugioh-card.component.html',
  styleUrls: ['./yugioh-card.component.css']
})
export class YugiohCardComponent implements OnInit {

  cards: any = [
    {
      tipe: 'Magic',
      router: '/cardGame/magic',
      pathImage: 'assets/imgCardGames/magic.jpg'
    },
    {
      tipe: 'Pokémon',
      router: '/cardGame/pokemon',
      pathImage: 'assets/imgCardGames/pokemon.jpg'
    },
    {
      tipe: 'Yu-Gi-Oh!',
      router: '/cardGame/yugioh',
      pathImage: 'assets/imgCardGames/yugioh.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
