import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadCrumbComponent } from './components/breadCrumb/breadCrumb.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Teste1Component } from './components/teste1/teste1.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    BreadCrumbComponent,
    NavbarComponent,
    Teste1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
