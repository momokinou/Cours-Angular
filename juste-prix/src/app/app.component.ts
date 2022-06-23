import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Objet } from './model/objet.model';
import { ObjetService } from './service/objet/objet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'juste-prix';

  objet!: Objet;
  objetSub?: Subscription;

  constructor(private objetService: ObjetService) {
  }

  ngOnInit(): void {
    this.objetSub = this.objetService.objet$.subscribe(newDataOfObjet => { this.objet = newDataOfObjet;});
  }

  ngOnDestroy(): void {
    this.objetSub?.unsubscribe();
  }
}
