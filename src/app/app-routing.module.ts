import { BoxComponent } from './components/yugioh-card/box/box.component';
import { DeckInicialComponent } from './components/yugioh-card/deck-inicial/deck-inicial.component';
import { BoosterComponent } from './components/yugioh-card/booster/booster.component';
import { YugiohCardComponent } from './components/yugioh-card/yugioh-card.component';
import { LatasComponent } from './components/pokemon-card/latas/latas.component';
import { KitTreinadorComponent } from './components/pokemon-card/kit-treinador/kit-treinador.component';
import { BoxterComponent } from './components/pokemon-card/boxter/boxter.component';
import { BoxEspecialComponent } from './components/pokemon-card/box-especial/box-especial.component';
import { BlisterComponent } from './components/pokemon-card/blister/blister.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cardGame', component: CardGameComponent
  },
  {
    path: 'pokemon', component: PokemonCardComponent
  },
  {
    path: "blister", component: BlisterComponent
  },
  {
    path: "boxter", component: BoxterComponent
  },
  {
    path: "box_especial", component: BoxEspecialComponent
  },
  {
    path: "kit_treinador", component: KitTreinadorComponent
  },
  {
    path: "latas", component: LatasComponent
  },
  {
    path: "booster", component: BoosterComponent
  },
  {
    path: "deck_inicial", component: DeckInicialComponent
  },
  {
    path: "box", component: BoxComponent
  },
  {
    path: "yugioh", component: YugiohCardComponent
  },
  {
    path: "**", component: PageNotFoundComponent 
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
