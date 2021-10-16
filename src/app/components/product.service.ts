import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProductsCG(){
    return ['Magic', 'Pokémon', 'Yu-Gi-Oh!']
  }
}
