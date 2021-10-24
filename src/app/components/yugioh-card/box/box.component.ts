import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  boxes: any =[
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Amanhecer majestoso (Dawn of majesty).png',
      name: 'Amanhecer majestoso (Dawn of majesty)',
      price: 'R$ 564,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Arena das almas perdidas.png',
      name: 'Arena das almas perdidas',
      price: 'R$ 225,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/As Provações do Reino.png',
      name: 'As Provações do Reino',
      price: 'R$ 279,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Ataque das profundezas.png',
      name: 'Ataque das profundezas',
      price: 'R$ 79,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Box Exaustão Relâmpago.png',
      name: 'Box Exaustão Relâmpago',
      price: 'R$ 199,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Cicatrizes de batalha.png',
      name: 'Cicatrizes de batalha',
      price: 'R$ 226,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Corte do rei (Kings court).png',
      name: 'Corte do rei (Kings court)',
      price: 'R$ 576,00',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Duelistas lendários Fúria de rá (Legendary duelists).png',
      name: 'Duelistas lendários Fúria de rá (Legendary duelists)',
      price: 'R$ 504,00',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Duelistas lendários temporada 2 (Legendary duelists).png',
      name: 'Duelistas lendários temporada 2 (Legendary duelists)',
      price: 'R$ 849,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Fantasmas do passado Edição especial (Ghosts Past).png',
      name: 'Fantasmas do passado Edição especial (Ghosts Past)',
      price: 'R$ 599,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Guardiões antigos (Ancient guardians).png',
      name: 'Guardiões antigos (Ancient guardians)',
      price: 'R$ 552,00',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Guardiões Dimencionais.png',
      name: 'Guardiões Dimencionais',
      price: 'R$ 399,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Investida crescente (Rising Rampage).png',
      name: 'Investida crescente (Rising Rampage)',
      price: 'R$ 284,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Lutadores Místicos (Mystic Fighters).png',
      name: 'Lutadores Místicos (Mystic Fighters)',
      price: 'R$ 552,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Neotempestade Negra (Dark Neostorm).png',
      name: 'Neotempestade Negra (Dark Neostorm)',
      price: 'R$ 349,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Neotempestade negra edição especial.png',
      name: 'Neotempestade negra edição especial',
      price: 'R$ 449,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Pacote estelar batalha real.png',
      name: 'Pacote estelar batalha real',
      price: 'R$ 279,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Pacote estelar vrains.png',
      name: 'Pacote estelar vrains',
      price: 'R$ 199,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Punhos mecânicos (Fists of the Gadgets).png',
      name: 'Punhos mecânicos (Fists of the Gadgets)',
      price: 'R$ 229,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Vórtice Ardente (Blazing Vortex).png',
      name: 'Vórtice Ardente (Blazing Vortex)',
      price: 'R$ 552,90',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
