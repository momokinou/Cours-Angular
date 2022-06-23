import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.scss']
})
export class TableLineComponent implements OnInit {

  @Input() id!: string;
  @Input() username!: string;
  @Input() mail!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
