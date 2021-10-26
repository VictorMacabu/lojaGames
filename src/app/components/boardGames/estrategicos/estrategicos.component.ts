import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrategicos',
  templateUrl: './estrategicos.component.html',
  styleUrls: ['./estrategicos.component.css']
})
export class EstrategicosComponent implements OnInit {

  estrategicos: any =[
    {
      tipe: 'Estratégico',
      pathImage: 'assets/boardGames/imgEstrategicos/ARENA THE CONTEST 69990.png',
      name: 'ARENA THE CONTEST',
      price: 'R$ 699,90',
    },
    {
      tipe: 'Estratégico',
      pathImage: 'assets/boardGames/imgEstrategicos/AS RUINAS PERDIDAS DE ARNAK 64990.png',
      name: 'AS RUINAS PERDIDAS DE ARNAK',
      price: 'R$ 649,90',
    },
    {
      tipe: 'Estratégico',
      pathImage: 'assets/boardGames/imgEstrategicos/BERENPARK 1990.png',
      name: 'BERENPARK',
      price: 'R$ 19,90',
    },
    {
      tipe: 'Estratégico',
      pathImage: 'assets/boardGames/imgEstrategicos/GLOOMHAVEN 124990.png',
      name: 'GLOOMHAVEN',
      price: 'R$ 1.249,90',
    },
    {
      tipe: 'Estratégico',
      pathImage: 'assets/boardGames/imgEstrategicos/STAR WARS REBELLION.png',
      name: 'STAR WARS REBELLION',
      price: 'R$ 349,90',
    },
    {
      tipe: 'Estratégico',
      pathImage: 'assets/boardGames/imgEstrategicos/TWILIGHT IMPERIUM IV.png',
      name: 'TWILIGHT IMPERIUM IV',
      price: 'R$ 1.199,90',
    },
    {
      tipe: 'Estratégico',
      pathImage: 'assets/boardGames/imgEstrategicos/UM BANQUETE A ODIN 57990.png',
      name: 'UM BANQUETE A ODIN',
      price: 'R$ 579,90',
    },
    {
      tipe: 'Estratégico',
      pathImage: 'assets/boardGames/imgEstrategicos/VAMPIRO A MÁSCARA HERANÇA 63990.png',
      name: 'VAMPIRO A MÁSCARA HERANÇA',
      price: 'R$ 639,90',
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
