import { ProductService } from './../product.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'left-bar-component',
    templateUrl: './left-bar.component.html',
    styleUrls: ['./left-bar.component.css']
})


export class LeftBarComponent implements OnInit {

    menuCG: any = [];

    constructor(private productService: ProductService) {


        var listCG = new ProductService();

        this.menuCG = this.productService.getProductsCG(); /* passou o array*/

        /*pesquisar = '';
        filter(list : String[]) {
            return list.filter(item => item.toLowerCase().search(this.pesquisar.toLowerCase())!= -1);
        }*/
    }

    ngOnInit() {

    }

}
