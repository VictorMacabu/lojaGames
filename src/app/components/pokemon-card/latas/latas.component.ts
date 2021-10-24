import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latas',
  templateUrl: './latas.component.html',
  styleUrls: ['./latas.component.css']
})
export class LatasComponent implements OnInit {

  latas: any = [
    {
      tipe: 'Latas',
      pathImage: 'assets/imgPokemon/latas/Lata Pokemon Destinos Ocultos Charizard GX.png',
      name: 'Lata Pokemon Destinos Ocultos Charizard GX',
      price: 'R$ 89,90',
    },
    {
      tipe: 'Latas',
      pathImage: 'assets/imgPokemon/latas/Lata Pokemon Destinos Ocultos Gyarados GX.png',
      name: 'Lata Pokemon Destinos Ocultos Gyarados GX',
      price: 'R$ 89,90',
    },
    {
      tipe: 'Latas',
      pathImage: 'assets/imgPokemon/latas/Lata Pokemon Destinos Ocultos Raichu GX.png',
      name: 'Lata Pokemon Destinos Ocultos Raichu GX',
      price: 'R$ 89,90',
    },
    {
      tipe: 'Latas',
      pathImage: 'assets/imgPokemon/latas/Lata Pokemon Lendas de Galar Zacian V.png',
      name: 'Lata Pokemon Lendas de Galar Zacian V',
      price: 'R$ 89,90',
    },
    {
      tipe: 'Latas',
      pathImage: 'assets/imgPokemon/latas/Lata Pokemon Lendas de Galar Zamazenta V.png',
      name: 'Lata Pokemon Lendas de Galar Zamazenta V',
      price: 'R$ 89,90',
    },
    {
      tipe: 'Latas',
      pathImage: 'assets/imgPokemon/latas/Lata Pokemon Parceiros de Galar Cinderace V.png',
      name: 'Lata Pokemon Parceiros de Galar Cinderace V',
      price: 'R$ 89,90',
    },
    {
      tipe: 'Latas',
      pathImage: 'assets/imgPokemon/latas/Lata Pokemon Parceiros de Galar Inteleon V.png',
      name: 'Lata Pokemon Parceiros de Galar Inteleon V',
      price: 'R$ 89,90',
    },
    {
      tipe: 'Latas',
      pathImage: 'assets/imgPokemon/latas/Lata Pokemon Parceiros de Galar Rillaboom V.png',
      name: 'Lata Pokemon Parceiros de Galar Rillaboom V',
      price: 'R$ 89,90',
    },
    {
      tipe: 'Latas',
      pathImage: 'assets/imgPokemon/latas/Mini Lata Pokémon Poder de Kanto Portugues.png',
      name: 'Mini Lata Pokémon Poder de Kanto Portugues',
      price: 'R$ 89,90',
    },    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
