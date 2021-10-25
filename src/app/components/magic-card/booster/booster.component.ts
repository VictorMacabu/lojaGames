import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'magicBooster',
  templateUrl: './booster.component.html',
  styleUrls: ['./booster.component.css']
})
export class MagicBoosterComponent implements OnInit {

  boosteres: any =[
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgMagic/booster/MAGIC BOX COLLECTOR BOOSTER THEROS BEYOND DEATH - COLECIONADOR.png',
      name: 'THEROS BEYOND DEATH COLECIONADOR',
      price: 'R$ 1.344,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgMagic/booster/MAGIC BOX SET BOOSTER ZENDIKAR RISING.png',
      name: 'SET BOOSTER ZENDIKAR RISING',
      price: 'R$ 999,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgMagic/booster/MAGIC CAIXA DE BOOSTER COLEÇÃO BÁSICA 2020 CORE SET M20.png',
      name: 'COLEÇÃO BÁSICA 2020 CORE SET M20',
      price: 'R$ 608,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgMagic/booster/MAGIC CAIXA DE BOOSTER COLEÇÃO BÁSICA 2021 CORE SET M21.png',
      name: 'COLEÇÃO BÁSICA 2021 CORE SET M21',
      price: 'R$ 819,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgMagic/booster/MAGIC CAIXA DE BOOSTER JOURNEY INTO NYX.png',
      name: 'BOOSTER JOURNEY INTO NYX',
      price: 'R$ 23,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgMagic/booster/MAGIC CAIXA DE BOOSTER RENASCER DE ZENDIKAR.png',
      name: 'BOOSTER RENASCER DE ZENDIKAR',
      price: 'R$ 428,90',
    },
    {
      tipe: 'Box Booster',
      pathImage: 'assets/imgMagic/booster/MAGIC CAIXA DE BOOSTER THEROS ALEM DA MORTE.png',
      name: 'BOOSTER THEROS ALEM DA MORTE',
      price: 'R$ 662,40',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
