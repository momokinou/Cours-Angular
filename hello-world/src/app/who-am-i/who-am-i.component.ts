import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.scss']
})
export class WhoAmIComponent implements OnInit {

  @Input()firstName = "";
  @Input()lastName = "";
  btn = true;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
    }, 2000);
  }
  onClickChangeData() {
    this.firstName = 'IT WAS ME';
    this.lastName = 'DIO';
  }

  onClickUnlock() {
    this.btn = false;
  }

}
