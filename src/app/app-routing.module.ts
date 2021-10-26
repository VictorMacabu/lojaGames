import { FuturistaComponent } from './components/rpgBooks/futurista/futurista.component';
import { MedievalComponent } from './components/rpgBooks/medieval/medieval.component';
import { TerrorComponent } from './components/rpgBooks/terror/terror.component';
import { RpgBooksComponent } from './components/rpgBooks/rpg-books/rpg-books.component';
import { CooperativosComponent } from './components/boardGames/cooperativos/cooperativos.component';
import { EstrategicosComponent } from './components/boardGames/estrategicos/estrategicos.component';
import { BordGamesComponent } from './components/boardGames/bord-games/bord-games.component';
import { MagicBoosterComponent } from './components/magic-card/booster/booster.component'
import { BundleComponent } from './components/magic-card/bundle/bundle.component';
import { DeckProntoComponent } from './components/magic-card/deck-pronto/deck-pronto.component';
import { DuelDecksComponent } from './components/magic-card/duel-decks/duel-decks.component';
import { MagicCardComponent } from './components/magic-card/magic-card.component';
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
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cardGame', component: CardGameComponent
  },
  {
    path: 'boardGame', component: BordGamesComponent
  },
  {
    path: 'rpgBooks', component: RpgBooksComponent
  },
  // inicio rotas card game Magic 
  {
    path: 'cardGame/magic', component: MagicCardComponent
  },
  {
    path: 'cardGame/magic/duel_decks', component: DuelDecksComponent
  },
  {
    path: 'cardGame/magic/deck_pronto', component: DeckProntoComponent
  },
  {
    path: 'cardGame/magic/bundle', component: BundleComponent
  },
  {
    path: 'cardGame/magic/booster', component: MagicBoosterComponent
  },
  // fim rotas card game Magic

  // inicio rotas card game Pokemon
  {
    path: 'cardGame/pokemon', component: PokemonCardComponent
  },
  {
    path: "cardGame/pokemon/blister", component: BlisterComponent
  },
  {
    path: "cardGame/pokemon/boxter", component: BoxterComponent
  },
  {
    path: "cardGame/pokemon/box_especial", component: BoxEspecialComponent
  },
  {
    path: "cardGame/pokemon/kit_treinador", component: KitTreinadorComponent
  },
  {
    path: "cardGame/pokemon/latas", component: LatasComponent
  },
  // fim rotas card game Pokemon

  // inicio rotas card game Yugioh
  {
    path: "cardGame/yugioh", component: YugiohCardComponent
  },
  {
    path: "cardGame/yugioh/booster", component: BoosterComponent
  },
  {
    path: "cardGame/yugioh/deck_inicial", component: DeckInicialComponent
  },
  {
    path: "cardGame/yugioh/box", component: BoxComponent
  },
  // fim rotas card game Yugioh

  // inicio rotas boardGames
  {
    path: 'boardGame/estrategicos', component: EstrategicosComponent
  },
  {
    path: 'boardGame/cooperativos', component: CooperativosComponent
  },
  // fim rotas boardGames

  // inicio rotas rpgBooks
  {
    path: 'rpgBooks/futuristas', component: FuturistaComponent
  },
  {
    path: 'rpgBooks/medievais', component: MedievalComponent
  },
  {
    path: 'rpgBooks/terror', component: TerrorComponent
  },
  // fim rotas rpgBooks

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
