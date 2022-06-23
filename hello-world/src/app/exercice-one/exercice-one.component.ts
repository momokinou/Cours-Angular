import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-one',
  templateUrl: './exercice-one.component.html',
  styleUrls: ['./exercice-one.component.scss']
})
export class ExerciceOneComponent implements OnInit {

  @Input()titre = "";
  @Input()soustitre = "";
  @Input()description = "";
  @Input()lien = "";
  

  constructor() { }

  ngOnInit(): void {
  }

}
