import { Car } from "../model/car.model";

export const CarOne = (): Car => {
    return {
        id: 1,
        brand: 'BMW',
        model: 'X5',
        imgPath: 'assets/img/bmw-x5.jpg'
    };
};

export const CarTwo = (): Car => {
    return {
        id: 2,
        brand: 'Audi',
        model: 'A4',
        imgPath: 'assets/img/audi-a4.jpg'
    };
};

export const CarThree = (): Car => {
    return {
        id: 3,
        brand: 'Mercedes',
        model: 'C-Class',
        imgPath: 'assets/img/mercedes-c-class.jpg'
    };
};

export const CarFour = (): Car => {
    return {
        id: 4,
        brand: 'BMW',
        model: 'X6',
        imgPath: 'assets/img/bmw-x6.jpg'
    };
};

