import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yugioh-card',
  templateUrl: './yugioh-card.component.html',
  styleUrls: ['./yugioh-card.component.css']
})
export class YugiohCardComponent implements OnInit {

  cards: any = [
    {
      tipe: 'Booster',
      pathImage: 'assets/imgYugioh/booster/Vórtice Ardente Blazing Vortex.png',
      router: '/cardGame/yugioh/booster',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgYugioh/box/Guardiões antigos (Ancient guardians).png',
      router: '/cardGame/yugioh/box',
    },
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Kaiba Reloaded starter.png',
      router: '/cardGame/yugioh/deck_inicial',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
