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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BlisterComponent } from './components/pokemon-card/blister/blister.component';
import { BoxEspecialComponent } from './components/pokemon-card/box-especial/box-especial.component';
import { BoxterComponent } from './components/pokemon-card/boxter/boxter.component';
import { KitTreinadorComponent } from './components/pokemon-card/kit-treinador/kit-treinador.component';
import { LatasComponent } from './components/pokemon-card/latas/latas.component';

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
    YugiohCardComponent,
    BlisterComponent,
    BoxEspecialComponent,
    BoxterComponent,
    KitTreinadorComponent,
    LatasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
