import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-three',
  templateUrl: './exercice-three.component.html',
  styleUrls: ['./exercice-three.component.scss']
})
export class ExerciceThreeComponent implements OnInit {

  compteur: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickIncrement() {
    this.compteur++;
  }

}
