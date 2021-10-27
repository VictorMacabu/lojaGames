import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.css']
})
export class TerrorComponent implements OnInit {

  terrores: any =[
    {
      tipe: 'RPG Terror',
      pathImage: 'assets/rpgBooks/terror/O CHAMADO DE CTHULHU 7E GUIA DO INVESTIGADOR 17990.png',
      name: 'O CHAMADO DE CTHULHU 7E GUIA DO INVESTIGADOR',
      price: 'R$ 179,90',
    },
    {
      tipe: 'RPG Terror',
      pathImage: 'assets/rpgBooks/terror/VAMPIRO A MÁSCARA - 5º EDIÇÃO EM PORTUGUÊS 17990.png',
      name: 'VAMPIRO A MÁSCARA - 5º EDIÇÃO EM PORTUGUÊS',
      price: 'R$ 179,90',
    },
    {
      tipe: 'RPG Terror',
      pathImage: 'assets/rpgBooks/terror/VAMPIRO A MÁSCARA - 5º EDIÇÃO - EDIÇÃO DE LUXO EM PORTUGUÊS 29990.png',
      name: 'VAMPIRO A MÁSCARA 5º EDIÇÃO EDIÇÃO DE LUXO EM PORTUGUÊS',
      price: 'R$ 299,90',
    },
    {
      tipe: 'RPG Terror',
      pathImage: 'assets/rpgBooks/terror/ZUMBIS! 5990.png',
      name: 'ZUMBIS!',
      price: 'R$ 59,90',
    },
    {
      tipe: 'RPG Terror',
      pathImage: 'assets/rpgBooks/terror/AVENTURAS PARA D&D 5º ED O OLHO DO LEVIATÃ 2990.png',
      name: 'AVENTURAS PARA D&D 5º ED O OLHO DO LEVIATÃ',
      price: 'R$ 29,90',
    },
    {
      tipe: 'RPG Terror',
      pathImage: 'assets/rpgBooks/terror/AVENTURAS PARA D&D 5º ED O REFÚGIO PERDIDO DO ARQUIMAGO.png',
      name: 'AVENTURAS PARA D&D 5º ED O REFÚGIO PERDIDO DO ARQUIMAGO',
      price: 'R$ 29,90',
    },
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
