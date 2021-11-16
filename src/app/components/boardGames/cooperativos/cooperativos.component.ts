import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooperativos',
  templateUrl: './cooperativos.component.html',
  styleUrls: ['./cooperativos.component.css']
})
export class CooperativosComponent implements OnInit {

  cooperativos: any =[
    {
      tipe: 'Cooperativo',
      pathImage: 'assets/boardGames/imgCooperativos/AS LENDAS DE ANDOR 39990.png',
      name: 'AS LENDAS DE ANDOR',
      price: 'R$ 399,90',
    },
    {
      tipe: 'Cooperativo',
      pathImage: 'assets/boardGames/imgCooperativos/AS LENDAS DE ANDOR PARTE 3 A ULTIMA ESPERANÇA 39990.png',
      name: 'AS LENDAS DE ANDOR PARTE 3 A ULTIMA ESPERANÇA',
      price: 'R$ 399,90',
    },
    {
      tipe: 'Cooperativo',
      pathImage: 'assets/boardGames/imgCooperativos/DRILLIT A FUGA DA MONTANHA DE CRISTAL 14990.png',
      name: 'DRILLIT A FUGA DA MONTANHA DE CRISTAL',
      price: 'R$ 149,90',
    },
    {
      tipe: 'Cooperativo',
      pathImage: 'assets/boardGames/imgCooperativos/ZOMBICIDE 49990.png',
      name: 'ZOMBICIDE',
      price: 'R$ 499,90',
    },
    {
      tipe: 'Cooperativo',
      pathImage: 'assets/boardGames/imgCooperativos/EXIT A CASA DOS ENIGMAS DEVIR 13490.png',
      name: 'EXIT A CASA DOS ENIGMAS DEVIR',
      price: 'R$ 134,90',
    },
    {
      tipe: 'Cooperativo',
      pathImage: 'assets/boardGames/imgCooperativos/EXIT O JOGO A TUMBA DO FARAÓ 12990.png',
      name: 'EXIT O JOGO A TUMBA DO FARAÓ',
      price: 'R$ 129,90',
    },
    {
      tipe: 'Cooperativo',
      pathImage: 'assets/boardGames/imgCooperativos/PANDEMIC LEGACY 2º TEMPORADA BLACK DEVIR 44990.png',
      name: 'PANDEMIC LEGACY 2º TEMPORADA BLACK DEVIR',
      price: 'R$ 449,90',
    },
    {
      tipe: 'Cooperativo',
      pathImage: 'assets/boardGames/imgCooperativos/PANDEMIC LEGACY 2º TEMPORADA YELLOW DEVIR 44990.png',
      name: 'PANDEMIC LEGACY 2º TEMPORADA YELLOW DEVIR',
      price: 'R$ 449,90',
    },
    {
      tipe: 'Cooperativo',
      pathImage: 'assets/boardGames/imgCooperativos/THE LEGEND OF DRIZZT DUNGEONS AND DRAGONS 49990.png',
      name: 'THE LEGEND OF DRIZZT DUNGEONS AND DRAGONS',
      price: 'R$ 449,90',
    },
  ]

  totalCooperativos(){
    var contador: any;
    for (var index in this.cooperativos) {
     contador = index; 
    }
    return parseInt(contador) + 1 ;
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
