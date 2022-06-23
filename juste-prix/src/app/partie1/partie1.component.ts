import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Objet } from '../model/objet.model';
import { FormsModule } from '@angular/forms';
import { ObjetService } from '../service/objet/objet.service';

@Component({
  selector: 'app-partie1',
  templateUrl: './partie1.component.html',
  styleUrls: ['./partie1.component.scss']
})
export class Partie1Component implements OnInit {

  joueur1!: Joueur;
  joueur2!: Joueur;
  joueur1Saved: boolean;
  joueur2Saved: boolean;

  constructor() {
    this.joueur1Saved = false;
    this.joueur2Saved = false;
  }

  ngOnInit(): void {
  }

  onClickSavePlayerOne(): void {
    this.joueur1Saved = true;
  }

  onClickSavePlayerTwo(): void {
    this.joueur2Saved = true;
  }

}
