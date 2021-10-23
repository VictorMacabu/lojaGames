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
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
