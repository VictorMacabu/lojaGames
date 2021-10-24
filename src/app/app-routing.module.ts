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
    path: "**", component: PageNotFoundComponent 
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
