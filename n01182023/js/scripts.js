// Javascript Class Examples
// Object Oriented Programming (OOP)

// Abstraction
// Encapsulation
// Polymorphism
// Inheritance

// PascalCase
class Vehicle {
    // automatically runs when a new instance is created
    constructor(color) {
        console.log(`The vehicle is ${color}`);
    }
    getEngine() {
        return 'Gas Powered';
    }
}
// const civic = new Vehicle('violet');
// console.log(civic.getEngine());

// Toyota - child
// Vehicle - parent
class Toyota extends Vehicle {
    displayType() {
        console.log('Car');
    }
}
// const fortuner = new Toyota('black');
// console.log(fortuner.getEngine());
// fortuner.displayType();

class Tesla extends Vehicle {
    getEngine() {
        return 'Electric Powered';
    }
}
// const cybertruck = new Tesla('yellow');
// console.log(cybertruck.getEngine());

class Car {
    constructor(brand, model, color, year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;

        const yearNow = new Date().getFullYear();
        this.carAge = yearNow - parseInt(this.year);
    }
    getBrandModel() {
        return `${this.brand} ${this.model}`;
    }
    getCarAge() {
        return `This ${this.brand} is ${this.carAge} year(s) old`;
    }
    getColor() {
        return this.color;
    }
}

class ChildCar extends Car {
    constructor(brand, model, color, year) {
        // super() is required if child has constructor
        super(brand, model, color, year);
        console.log('The Child class');
    }
    getColor() {
        const color = super.getColor();
        return color;
    }
}
const vios = new ChildCar('Toyota', 'Vios', 'Red', 2020);
// console.log(vios.getBrandModel());
// console.log(vios.getCarAge());
console.log(vios.getColor());
console.log(vios);