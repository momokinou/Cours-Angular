import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Car } from '../model/car.model';
import { CarService } from '../services/car/car.service';

@Component({
  selector: 'app-exercice-five',
  templateUrl: './exercice-five.component.html',
  styleUrls: ['./exercice-five.component.scss']
})
export class ExerciceFiveComponent implements OnInit, OnDestroy {

  cars?: Car[];
  carSelected?: Car;
  carSelectedSub?: Subscription;
  carSub?: Subscription;

  private carsBackup?: Car[];

  filter?: string;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carSub = this.carService.cars$.subscribe(newDataOfCarsNexted => {this.cars = newDataOfCarsNexted; this.carsBackup = newDataOfCarsNexted;});

    this.carSelectedSub = this.carService.carSelected.subscribe(newDataOfCarSelected => this.carSelected = newDataOfCarSelected);

    this.carService.downloadAllCars();
  }

  onClickApplyFilter(): void {
    const rg = new RegExp(`^${this.filter?.toLowerCase()}`);
    this.cars = this.carsBackup?.filter(car => rg.test(car.brand.toLowerCase()) || rg.test(car.model.toLowerCase()));
  }

  //LifeCycle Method appelé lorsque le composant est détruit
  ngOnDestroy(): void {
    this.carSub?.unsubscribe();
  }

}
