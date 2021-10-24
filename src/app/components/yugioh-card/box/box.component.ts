import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  boxes: any =[
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
