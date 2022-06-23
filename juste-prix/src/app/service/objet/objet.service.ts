import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Objet } from 'src/app/model/objet.model';

@Injectable({
  providedIn: 'root'
})
export class ObjetService {

  // Une variable réactive => on va pouvoir envoyer une nouvelle valeur à l'intérieur et tous les composants/services qui écoutent
  // sur la variable, récupérent la nouvelle valeur qui a été envoyée.
  private objet: BehaviorSubject<Objet>;
  objet$: Observable<Objet>; // read only et permet d'exposer le contenu de la variable objet qui elle, est read write
  objetNew!: Objet;

  constructor() {
    this.objet = new BehaviorSubject<Objet>({ name: '', prix: 0 });
    this.objet$ = this.objet.asObservable();
  }

  createObjet(objet: Objet) { 
    this.objetNew = {
      name: objet.name,
      prix: objet.prix
    };
    this.objet.next(this.objetNew);
  }
}
