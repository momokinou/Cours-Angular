import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from 'src/app/model/car.model';
import { CarOne, CarTwo, CarThree, CarFour } from 'src/app/fixture/car.fixture';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  // Une variable réactive => on va pouvoir envoyer une nouvelle valeur à l'intérieur et tous les composants/services qui écoutent
  // sur la variable, récupérent la nouvelle valeur qui a été envoyée.
  private cars: BehaviorSubject<Car[]>;
  cars$: Observable<Car[]>; // read only et permet d'exposer le contenu de la variable cars qui elle, est read write
  
  carSelected: BehaviorSubject<Car | undefined>;

  constructor() {
    this.cars = new BehaviorSubject<Car[]>([]);
    this.cars$ = this.cars.asObservable();
    this.carSelected = new BehaviorSubject<Car | undefined>(undefined);
  }

  /**
   * Fonction qui dans une appli réelle une API pour récupérer les voitures
   */
  downloadAllCars() {
    //Next permet d'envoyer des nouvelles valeurs dans le subject
    this.cars.next([CarOne(), CarTwo(), CarThree(), CarFour()]);
  }

  deleteLastItem() {
    let cars = this.cars.getValue();
    cars.pop();
    this.cars.next(cars);
  }

  selectCar(id: number) {
    this.carSelected?.next(this.cars.getValue().find(car => car.id === id));
  }

}
