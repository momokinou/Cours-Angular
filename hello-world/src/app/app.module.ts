import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { ExerciceOneComponent } from './exercice-one/exercice-one.component';
import { ExerciceTwoComponent } from './exercice-two/exercice-two.component';
import { ExerciceThreeComponent } from './exercice-three/exercice-three.component';
import { ExerciceFourComponent } from './exercice-four/exercice-four.component';
import { ExerciceFiveComponent } from './exercice-five/exercice-five.component';
import { TableLineComponent } from './exercice-two/table-line/table-line.component';
import { CardComponent } from './exercice-five/card/card.component';
import { TableComponent } from './exercice-five/table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WhoAmIComponent,
    ExerciceOneComponent,
    ExerciceTwoComponent,
    ExerciceThreeComponent,
    ExerciceFourComponent,
    ExerciceFiveComponent,
    TableComponent,
    TableLineComponent,
    CardComponent
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
