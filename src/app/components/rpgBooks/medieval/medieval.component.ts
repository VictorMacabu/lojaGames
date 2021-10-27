import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medieval',
  templateUrl: './medieval.component.html',
  styleUrls: ['./medieval.component.css']
})
export class MedievalComponent implements OnInit {

  medievais: any =[
    {
      tipe: 'RPG Medieval',
      pathImage: 'assets/rpgBooks/medieval/AS LAGRIMAS DE NUWA - MEDIEVAL ASIÁTICO.png',
      name: 'AS LAGRIMAS DE NUWA - MEDIEVAL ASIÁTICO',
      price: 'R$ 59,90',
    },
    {
      tipe: 'RPG medieval',
      pathImage: 'assets/rpgBooks/medieval/AVENTURAS PARA A 5E ENCONTROS FANTASTICOS 7 DeD.png',
      name: 'AVENTURAS PARA A 5E ENCONTROS FANTASTICOS 7 DeD',
      price: 'R$ 29,90',
    },
    {
      tipe: 'RPG medieval',
      pathImage: 'assets/rpgBooks/medieval/DeD 5 ED GUIA DO AVENTUREIRO PARA A COSTA DA ESPADA 17990.png',
      name: 'DeD 5 ED GUIA DO AVENTUREIRO PARA A COSTA DA ESPADA',
      price: 'R$ 179,90',
    },
    {
      tipe: 'RPG medieval',
      pathImage: 'assets/rpgBooks/medieval/DeD 5 ED LIVRO DO MESTRE 19990.png',
      name: 'DeD 5 ED LIVRO DO MESTRE',
      price: 'R$ 199,90',
    },
    {
      tipe: 'RPG medieval',
      pathImage: 'assets/rpgBooks/medieval/PATHFINDER 2E LIVRO BÁSICO 22990.png',
      name: 'PATHFINDER 2E LIVRO BÁSICO',
      price: 'R$ 229,90',
    },
    {
      tipe: 'RPG medieval',
      pathImage: 'assets/rpgBooks/medieval/THE WITCHER RPG 12990.png',
      name: 'THE WITCHER RPG',
      price: 'R$ 129,90',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
