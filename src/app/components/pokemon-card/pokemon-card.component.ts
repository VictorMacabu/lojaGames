import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  opcoes: any = [
    { 
      tipe: 'Latas',
      pathImage: 'assets/imgPokemon/latas/Lata Pokemon Destinos Ocultos Charizard GX.png',
      router: '/cardGame/pokemon/latas',
    },
    { 
      tipe: 'Kit Treinador',
      pathImage: 'assets/imgPokemon/kit_treinador/POKEMON KIT TREINADOR PIKACHU MASCARADA E SUICUNE.png',
      router: '/cardGame/pokemon/kit_treinador',
    },
    { 
      tipe: 'Boxter',
      pathImage: 'assets/imgPokemon/boxter/POKEMON BOX - DUBWOOL V CAMINHO DO CAMPEAO.png',
      router: '/cardGame/pokemon/boxter',
    },
    { 
      tipe: 'Box Especial',
      pathImage: 'assets/imgPokemon/box_especial/POKEMON BOX LAPRAS CAMINHO DO CAMPEAO.png',
      router: '/cardGame/pokemon/box_especial',
    },
    { 
      tipe: 'Blister',
      pathImage: 'assets/imgPokemon/blister/BLISTER TRIPLO POKEMON - ESTILOS DE BATALHA ESPADA E ESCUDO CHARMANDER.png',
      router: '/cardGame/pokemon/blister',
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
