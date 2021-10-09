import { Component } from "@angular/core";

@Component({
    selector: 'left-bar-component',
    templateUrl: './left-bar.component.html',
    styleUrls: ['./left-bar.component.css']
})


export class LeftBarComponent {
    menus : any = ['PHP', 'Js', 'JAVA', 'C#', 'Go'];
    pesquisar = '';
    filter(list : String[]) {
        return list.filter(item => item.toLowerCase().search(this.pesquisar.toLowerCase())!= -1);
    }

}