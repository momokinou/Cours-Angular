import { Component, Input, OnInit } from '@angular/core';
import { Objet } from '../model/objet.model';
import { ObjetService } from '../service/objet/objet.service';

@Component({
  selector: 'app-partie2',
  templateUrl: './partie2.component.html',
  styleUrls: ['./partie2.component.scss']
})
export class Partie2Component implements OnInit {
  
  @Input() objet!: Objet;
  reset: Objet = {
    name: '',
    prix: 0
  };
  nbrEssais: number = 0;
  prix: number | undefined;
  indication: string = 'Indiquez le prix';
  fin: boolean = true;

  constructor(private objetService: ObjetService) {
    
  }

  ngOnInit(): void {
  }

  onClickIncrementAndCheckValue() {
    this.nbrEssais++;
    if (this.objet.prix === this.prix) {
      this.indication = 'Bravo ! Vous avez gagné en ' + this.nbrEssais + ' essais !';
      this.fin = false;
    } else if (this.objet.prix < this.prix!) {
      this.indication = this.prix + " - c'est trop haut";
    } else if (this.objet.prix > this.prix! || this.prix === undefined) {
      this.indication = this.prix + " - c'est trop bas";
    }
  }

}
