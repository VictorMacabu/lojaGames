import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blister',
  templateUrl: './blister.component.html',
  styleUrls: ['./blister.component.css']
})
export class BlisterComponent implements OnInit {

  blisters:any=[
    {
      tipe: 'Blister',
      pathImage: 'src/app/components/pokemon-card/blister/assets/image/BLISTER-QUADRUPLO-ESTILOS-DE-BATALHA-ESPADA-E-ESCUDO-5-EEVEE.png',
      name: 'Pokémon blister quadruplo estilos de batalha espada e escudo 5 Eevee',
      price: 'R$ 29,90',
    },
    {
      tipe: 'Blister',
      pathImage: 'src/app/components/pokemon-card/blister/assets/image/BLISTER-QUADRUPLO-ESTILOS-DE-BATALHA-ESPADA-E-ESCUDO-5-JOLTEON.png',
      name: 'Pokémon blister quadruplo estilos de batalha espada e escudo 5 Jolteon',
      price: 'R$ 29,90',
    },
    {
      tipe: 'Blister',
      pathImage: 'src/app/components/pokemon-card/blister/assets/image/BLISTER-TRIPLO-ESTILOS-DE-BATALHA-ESPADA-E-ESCUDO-5-ARROKUDA.png',
      name: 'Pokémon blister triplo estilos de batalha espada e escudo Arrokuda',
      price: 'R$ 21,99',
    },
    {
      tipe: 'Blister',
      pathImage: 'src/app/components/pokemon-card/blister/assets/image/BLISTER-TRIPLO-ESTILOS-DE-BATALHA-ESPADA-E-ESCUDO-CHARMANDER.png',
      name: 'Pokémon blister triplo estilos de batalha espada e escudo Charmander',
      price: 'R$ 21,99',
    },
    {
      tipe: 'Blister',
      pathImage: 'src/app/components/pokemon-card/blister/assets/image/BLISTER-UNITARIO-BOOSTER-ESPADA-E-ESCUDO-6-REINADO-ARREPIANTE.png',
      name: 'Pokémon blister unitario booster espada e escudo 6 reinado arrepiante',
      price: 'R$ 7,90',
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
