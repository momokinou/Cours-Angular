import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  users: { firstName: string, lastName: string }[];

  constructor() {
    this.users = [];

    this.users.push({ firstName: 'John', lastName: 'Doe' });
    this.users.push({ firstName: 'Jane', lastName: 'Doe' });
  }
}