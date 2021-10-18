import { ProductService } from './../product.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'left-bar-component',
    templateUrl: './left-bar.component.html',
    styleUrls: ['./left-bar.component.css']
})


export class LeftBarComponent implements OnInit {

    categorias: any = [
        {ID: 1, nome:'Card Game'},
        {ID: 2, nome:'Jogos de Tabuleiro'},
        {ID: 3, nome:'Livros RPG'},
    ];

    subcategorias: any = [
        {ID: 1, nome:'Magic', IDPai: 1},
        {ID: 2, nome:'Pokémon', IDPai: 1},
        {ID: 3, nome:'Yu-Gi-Oh!', IDPai: 1},
        {ID: 4, nome:'Cooperativos', IDPai: 2},
        {ID: 5, nome:'Estratégicos', IDPai: 2},
        {ID: 6, nome:'Medieval', IDPai: 3},
        {ID: 7, nome:'Terror', IDPai: 3},
        {ID: 8, nome:'Futurista', IDPai: 3},
    ]

    sub2categorias: any =[
        {ID: 1, nome:'Booster', IDPai: 1},
        {ID: 2, nome:'Bundle', IDPai: 1},
        {ID: 3, nome:'Deck Pronto', IDPai: 1},
        {ID: 4, nome:'Duel Decks', IDPai: 1},
        {ID: 5, nome:'Blister', IDPai: 2},
        {ID: 6, nome:'Box Especial', IDPai: 2},
        {ID: 7, nome:'Boxter', IDPai: 2},
        {ID: 8, nome:'Kit Treinador', IDPai: 2},
        {ID: 9, nome:'Latas', IDPai: 2},
        {ID: 10, nome:'Booster', IDPai: 3},
        {ID: 11, nome:'Box', IDPai: 3},
        {ID: 12, nome:'Deck Inicial', IDPai: 3},
    ]

    constructor(private productService: ProductService) {
        /*
            var listCG = new ProductService();
    
            this.menuCG = this.productService.getProductsCG(); // passou o array

        pesquisar = '';
        filter(list : String[]) {
            return list.filter(item => item.toLowerCase().search(this.pesquisar.toLowerCase())!= -1);
        }*/
    }

    ngOnInit() {

    }

}
