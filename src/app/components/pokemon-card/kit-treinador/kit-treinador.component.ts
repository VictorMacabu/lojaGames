import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kit-treinador',
  templateUrl: './kit-treinador.component.html',
  styleUrls: ['./kit-treinador.component.css']
})
export class KitTreinadorComponent implements OnInit {

  kities: any = [
    {
      tipe: 'Kit Treinador',
      pathImage: 'assets/imgPokemon/kit_treinador/POKEMON KIT TREINADOR LYCANROC E RAICHU DE ALOLA.png',
      name: 'POKEMON KIT TREINADOR LYCANROC E RAICHU DE ALOLA',
      price: 'R$ 49,90',
    }, {
      tipe: 'Kit Treinador',
      pathImage: 'assets/imgPokemon/kit_treinador/POKEMON KIT TREINADOR PIKACHU MASCARADA E SUICUNE.png',
      name: 'POKEMON KIT TREINADOR PIKACHU MASCARADA E SUICUNE',
      price: 'R$ 35,90',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
