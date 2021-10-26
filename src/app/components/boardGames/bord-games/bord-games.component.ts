import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bord-games',
  templateUrl: './bord-games.component.html',
  styleUrls: ['./bord-games.component.css']
})
export class BordGamesComponent implements OnInit {

  sections: any = [
    {
      tipe: 'Cooperativos',
      router: '/boardGame/cooperativos',
      pathImage: 'assets/boardGames/cooperativo.jpg'
    },
    {
      tipe: 'Estratégicos',
      router: '/boardGame/estrategicos',
      pathImage: 'assets/boardGames/estrategico.jpg'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
