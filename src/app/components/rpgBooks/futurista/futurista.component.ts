import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-futurista',
  templateUrl: './futurista.component.html',
  styleUrls: ['./futurista.component.css']
})
export class FuturistaComponent implements OnInit {

  futuristas: any =[
    {
      tipe: 'RPG Futurista',
      pathImage: 'assets/rpgBooks/futurista/CYBERPUNK 2020 UM RPG NUM FUTURO SOMBRIO 8990.png',
      name: 'CYBERPUNK 2020 UM RPG NUM FUTURO SOMBRIO',
      price: 'R$ 89,90',
    },
    {
      tipe: 'RPG Futurista',
      pathImage: 'assets/rpgBooks/futurista/SHADOWRUN ANARCHY 17990.png',
      name: 'SHADOWRUN ANARCHY',
      price: 'R$ 179,90',
    },
    {
      tipe: 'RPG Futurista',
      pathImage: 'assets/rpgBooks/futurista/STARfINDER LIVRO BÁSICO 19990.png',
      name: 'STARFINDER LIVRO BÁSICO',
      price: 'R$ 199,90',
    },
    {
      tipe: 'RPG Futurista',
      pathImage: 'assets/rpgBooks/futurista/STARFINDER ARQUIVO ALIENÍGENA 15990.png',
      name: 'STARFINDER ARQUIVO ALIENÍGENA',
      price: 'R$ 159,90',
    },
    {
      tipe: 'RPG Futurista',
      pathImage: 'assets/rpgBooks/futurista/TALES FROM THE LOOP 17990.png',
      name: 'TALES FROM THE LOOP',
      price: 'R$ 179,90',
    },
    {
      tipe: 'RPG Futurista',
      pathImage: 'assets/rpgBooks/futurista/TALES FROM THE LOOP - NOSSAS AMIGAS, AS MÁQUINAS 14990.png',
      name: 'TALES FROM THE LOOP - NOSSAS AMIGAS, AS MÁQUINAS',
      price: 'R$ 149,90',
    },
    {
      tipe: 'RPG Futurista',
      pathImage: 'assets/rpgBooks/futurista/TALES FROM THE LOOP - ESCUDO DO MESTRE 7990.png',
      name: 'TALES FROM THE LOOP - ESCUDO DO MESTRE',
      price: 'R$ 79,90',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
