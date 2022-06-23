import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car.model';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() cars?: Car[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  onClickShowCarCard(id: number): void {
    this.carService.selectCar(id);
  }

}
