import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styleUrls: ['./booster.component.css']
})
export class BoosterComponent implements OnInit {

  boosters: any =[
    {
      tipe: 'Deck Inicial',
      pathImage: 'assets/imgYugioh/deck_inicial/Ataque link 2017.png',
      name: 'Ataque link 2017',
      price: 'R$ 79,90',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
