import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Partie1Component } from './partie1/partie1.component';
import { Partie2Component } from './partie2/partie2.component';
import { Partie1ObjetComponent } from './partie1-objet/partie1-objet.component';

@NgModule({
  declarations: [
    AppComponent,
    Partie1Component,
    Partie2Component,
    Partie1ObjetComponent
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
