import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-two',
  templateUrl: './exercice-two.component.html',
  styleUrls: ['./exercice-two.component.scss']
})
export class ExerciceTwoComponent implements OnInit {

  users: {id: number, username: string, mail: string}[];

  constructor() {
    this.users = [];

    this.users.push({ id: 1, username: 'John', mail: 'mail@1.fr' });
    this.users.push({ id: 2, username: 'Jane', mail: 'mail@2.fr' });
    this.users.push({ id: 3, username: 'Jack', mail: 'mail@3.fr' });
  }

  ngOnInit(): void {
  }

}
