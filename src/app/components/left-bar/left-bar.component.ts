import { ProductService } from './../product.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'left-bar-component',
    templateUrl: './left-bar.component.html',
    styleUrls: ['./left-bar.component.css']
})


export class LeftBarComponent implements OnInit {

    constructor(private productService: ProductService) {
        /*
            var listCG = new ProductService();
    
            this.menuCG = this.productService.getProductsCG(); // passou o array

        pesquisar = '';
        filter(list : String[]) {
            return list.filter(item => item.toLowerCase().search(this.pesquisar.toLowerCase())!= -1);
        }*/
    }

  public categorias: any = [
        {ID: 1, nome:'Card Game'},
        {ID: 2, nome:'Jogos de Tabuleiro'},
        {ID: 3, nome:'Livros RPG'},
    ];

   public subcategorias1: any = [
        {"nome":'Magic', IDPai: 1},
        {"nome":'Pokémon', IDPai: 1},
        {"nome":'Yu-Gi-Oh!', IDPai: 1},
        {"nome":'Cooperativos', IDPai: 2},
        {"nome":'Estratégicos', IDPai: 2},
        {"nome":'Medieval', IDPai: 3},
        {"nome":'Terror', IDPai: 3},
        {"nome":'Futurista', IDPai: 3}
    ]

    public sub2categorias = [
        {ID: 1, "nome":'Booster', IDPai: 1},
        {ID: 2, "nome":'Bundle', IDPai: 1},
        {ID: 3, "nome":'Deck Pronto', IDPai: 1},
        {ID: 4, "nome":'Duel Decks', IDPai: 1},
        {ID: 5, "nome":'Blister', IDPai: 2},
        {ID: 6, "nome":'Box Especial', IDPai: 2},
        {ID: 7, "nome":'Boxter', IDPai: 2},
        {ID: 8, "nome":'Kit Treinador', IDPai: 2},
        {ID: 9, "nome":'Latas', IDPai: 2},
        {ID: 10, "nome":'Booster', IDPai: 3},
        {ID: 11, "nome":'Box', IDPai: 3},
        {ID: 12, "nome":'Deck Inicial', IDPai: 3},
    ]

    ngOnInit() {

    }

}
