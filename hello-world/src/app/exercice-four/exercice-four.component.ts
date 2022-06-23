import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-four',
  templateUrl: './exercice-four.component.html',
  styleUrls: ['./exercice-four.component.scss']
})
export class ExerciceFourComponent implements OnInit {

  cards: { photo: string, name: string, cri: string }[];

  constructor() {
    this.cards = [];

    this.cards.push({ photo: 'assets/images/card-1.jpg', name: 'Chien', cri: 'wouaf wouaf' });
    this.cards.push({ photo: 'assets/images/card-2.jpg', name: 'Chat', cri: 'meow meow' });
  }

  ngOnInit(): void {
  }

  onClickAlert(cri: any) {
    alert(cri);
  }
}
