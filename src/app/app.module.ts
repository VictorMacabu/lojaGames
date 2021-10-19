import { ProductService } from './components/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadCrumbComponent } from './components/breadCrumb/breadCrumb.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CardColectionComponent } from './components/card-colection/card-colection.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { MagicCardComponent } from './components/magic-card/magic-card.component';
import { YugiohCardComponent } from './components/yugioh-card/yugioh-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    BreadCrumbComponent,
    NavbarComponent,
    CardColectionComponent,
    CardsComponent,
    HomeComponent,
    PageNotFoundComponent,
    CardGameComponent,
    PokemonCardComponent,
    MagicCardComponent,
    YugiohCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
