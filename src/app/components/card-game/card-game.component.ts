import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {
  sections: any = [
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
