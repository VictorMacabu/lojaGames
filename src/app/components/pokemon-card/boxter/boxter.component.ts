import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxter',
  templateUrl: './boxter.component.html',
  styleUrls: ['./boxter.component.css']
})
export class BoxterComponent implements OnInit {

  boxteres: any = [
    {
      tipe: 'Boxter',
      pathImage: 'assets/imgPokemon/boxter/POKEMON BOX - DUBWOOL V CAMINHO DO CAMPEAO.png',
      name: 'POKEMON BOX DUBWOOL V CAMINHO DO CAMPEAO',
      price: 'R$ 89,90',
    },
    {
      tipe: 'Boxter',
      pathImage: 'assets/imgPokemon/boxter/POKEMON BOX BOOSTER - ESPADA E ESCUDO 2 RIXA REBELDE.png',
      name: 'POKEMON BOX BOOSTER ESPADA E ESCUDO 2 RIXA REBELDE',
      price: 'R$ 149,90',
    }, {
      tipe: 'Boxter',
      pathImage: 'assets/imgPokemon/boxter/POKEMON BOX BOOSTER - ESPADA E ESCUDO 3 ESCURIDAO INCANDESCENTE.png',
      name: 'POKEMON BOX BOOSTER ESPADA E ESCUDO 3 ESCURIDAO INCANDESCENTE',
      price: 'R$ 219,90',
    }, {
      tipe: 'Boxter',
      pathImage: 'assets/imgPokemon/boxter/POKEMON BOX BOOSTER - ESPADA E ESCUDO 5 ESTILOS DE BATALHA.png',
      name: 'POKEMON BOX BOOSTER ESPADA E ESCUDO 5 ESTILOS DE BATALHA',
      price: 'R$ 149,90',
    }, {
      tipe: 'Boxter',
      pathImage: 'assets/imgPokemon/boxter/Pokémon box booster - Espada e escudo 6 reinando arrepiante.png',
      name: 'POKEMON BOX BOOSTER ESPADA E ESCUDO 6 REINADO ARREPIANTE',
      price: 'R$ 287,90',
    }, {
      tipe: 'Boxter',
      pathImage: 'assets/imgPokemon/boxter/POKEMON BOX BOOSTER - SOL E LUA 11 SINTONIA MENTAL.png',
      name: 'POKEMON BOX BOOSTER - SOL E LUA 11 SINTONIA MENTAL',
      price: 'R$ 209,90',
    }, {
      tipe: 'Boxter',
      pathImage: 'assets/imgPokemon/boxter/POKEMON BOX BOOSTER - SOL E LUA 12 ECLIPSE COSMICO.png',
      name: 'POKEMON BOX BOOSTER - SOL E LUA 12 ECLIPSE COSMICO',
      price: 'R$ 209,90',
    }, {
      tipe: 'Boxter',
      pathImage: 'assets/imgPokemon/boxter/POKEMON BOX DISPLAY BOOSTER - SOL E LUA 9 UNIAO DE ALIADOS.png',
      name: 'POKEMON BOX DISPLAY BOOSTER - SOL E LUA 9 UNIAO DE ALIADOS',
      price: 'R$ 189,90',
    }, {
      tipe: 'Boxter',
      pathImage: 'assets/imgPokemon/boxter/POKEMON BOX DISPLAY BOOSTER - SOL E LUA 10 ELOS INQUEBRAVEIS.png',
      name: 'POKEMON BOX DISPLAY BOOSTER - SOL E LUA 10 ELOS INQUEBRAVEIS',
      price: 'R$ 209,90',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
