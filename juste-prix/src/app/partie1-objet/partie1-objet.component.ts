import { Component, OnInit } from '@angular/core';
import { Objet } from '../model/objet.model';
import { ObjetService } from '../service/objet/objet.service';

@Component({
  selector: 'app-partie1-objet',
  templateUrl: './partie1-objet.component.html',
  styleUrls: ['./partie1-objet.component.scss']
})
export class Partie1ObjetComponent implements OnInit {

  objet: Objet = {
    name: '',
    prix: 0
  };

  constructor(private objetService: ObjetService) { }

  ngOnInit(): void {
  }

  onClickSave(): void {
    this.objetService.createObjet(this.objet);
  }

}
