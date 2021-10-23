import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-especial',
  templateUrl: './box-especial.component.html',
  styleUrls: ['./box-especial.component.css']
})
export class BoxEspecialComponent implements OnInit {

  specialBoxes:any=[
    {
      tipe: 'Box Especial',
      pathImage: 'assets/imgPokemon/box_especial/POKEMON BOX BARALHO - BATALHA DE LIGA CHARIZARD VS PIKACHU.png',
      name: 'POKEMON BOX BATALHA DE LIGA Charizard VS Pikachu',
      price: 'R$ 149,90',
    },
    {
      tipe: 'Box Especial',
      pathImage: 'assets/imgPokemon/box_especial/POKEMON BOX COLOSSAL CAMINHO DO CAMPEAO.png',
      name: 'POKEMON BOX COLOSSAL CAMINHO DO CAMPEAO',
      price: 'R$ 39,90',
    },
    {
      tipe: 'Box Especial',
      pathImage: 'assets/imgPokemon/box_especial/POKEMON BOX LAPRAS CAMINHO DO CAMPEAO.png',
      name: 'POKEMON BOX LAPRAS CAMINHO DO CAMPEAO',
      price: 'R$ 39,90',
    },
    {
      tipe: 'Box Especial',
      pathImage: 'assets/imgPokemon/box_especial/POKEMON BOX URSHIFU V GOLPE DECISIVO ESPADA ESCUDO.png',
      name: 'POKEMON BOX URSHIFU V GOLPE DECISIVO ESPADA ESCUDO',
      price: 'R$ 99,90',
    },
    {
      tipe: 'Box Especial',
      pathImage: 'assets/imgPokemon/box_especial/POKEMON BOX URSHIFU V GOLPE FLUIDO ESPADA ESCUDO.png',
      name: 'POKEMON BOX URSHIFU V GOLPE FLUIDO ESPADA ESCUDO',
      price: 'R$ 99,90',
    },
    {
      tipe: 'Box Especial',
      pathImage: 'assets/imgPokemon/box_especial/POKEMON DECK BARALHO - BATALHA DE LIGA ZACIAN V.png',
      name: 'POKEMON DECK BARALHO - BATALHA DE LIGA ZACIAN V',
      price: 'R$ 119,90',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
