import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styleUrls: ['./booster.component.css']
})
export class BoosterComponent implements OnInit {

  boosters: any =[
    {
      tipe: 'Booster',
      pathImage: 'assets/imgYugioh/booster/Amanhecer majestoso Dawn of majesty.png',
      name: 'Amanhecer majestoso Dawn of majesty',
      price: 'R$ 23,90',
    },
    {
      tipe: 'Booster',
      pathImage: 'assets/imgYugioh/booster/Assassinos secretos Secret Slayers.png',
      name: 'Assassinos secretos Secret Slayers',
      price: 'R$ 22,90',
    },
    {
      tipe: 'Booster',
      pathImage: 'assets/imgYugioh/booster/Corte do Rei Kings Court.png',
      name: 'Corte do Rei Kings Court',
      price: 'R$ 25,90',
    },
    {
      tipe: 'Booster',
      pathImage: 'assets/imgYugioh/booster/Duelistas Lendários Fúria de Rá.png',
      name: 'Duelistas Lendários Fúria de Rá',
      price: 'R$ 13,90',
    },
    {
      tipe: 'Booster',
      pathImage: 'assets/imgYugioh/booster/Duelistas Lendários temporada 2 Legendary duelists.png',
      name: 'Duelistas Lendários temporada 2 Legendary duelists',
      price: 'R$ 99,90',
    },
    {
      tipe: 'Booster',
      pathImage: 'assets/imgYugioh/booster/Exaustão Relâmpago.png',
      name: 'Exaustão Relâmpago',
      price: 'R$ 22,90',
    },
    {
      tipe: 'Booster',
      pathImage: 'assets/imgYugioh/booster/Guardiões Antigos Ancient Guardians.png',
      name: 'Guardiões Antigos Ancient Guardians',
      price: 'R$ 23,90',
    },
    {
      tipe: 'Booster',
      pathImage: 'assets/imgYugioh/booster/Vórtice Ardente Blazing Vortex.png',
      name: 'Vórtice Ardente Blazing Vortex',
      price: 'R$ 22,90',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
