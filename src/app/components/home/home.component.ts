import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections: any = [
    {
      tipe: 'Jogos de Cartas',
      router: '/cardGame',
      pathImage: 'assets/imgCardGames/ZBYC2zm.jpeg'
    },
    {
      tipe: 'Jogos de Tabuleiro',
      router: '/boardGame',
      pathImage: 'assets/boardGames/pexels-photo-776654.jpeg'
    },
    {
      tipe: 'Livros de RPG',
      router: '/rpgBooks',
      pathImage: 'assets/rpgBooks/livros.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
