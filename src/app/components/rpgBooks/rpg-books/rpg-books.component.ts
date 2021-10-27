import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpg-books',
  templateUrl: './rpg-books.component.html',
  styleUrls: ['./rpg-books.component.css']
})
export class RpgBooksComponent implements OnInit {

  sections: any = [
    {
      tipe: 'Futurista',
      router: '/rpgBooks/futuristas',
      pathImage: 'assets/rpgBooks/futurista.jpg'
    },
    {
      tipe: 'Medieval',
      router: '/rpgBooks/medievais',
      pathImage: 'assets/rpgBooks/medieval.jpg'
    },
    {
      tipe: 'Terror',
      router: '/rpgBooks/terror',
      pathImage: 'assets/rpgBooks/terror.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
