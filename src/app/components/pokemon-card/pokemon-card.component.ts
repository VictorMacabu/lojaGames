import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  opcoes: any = [
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
