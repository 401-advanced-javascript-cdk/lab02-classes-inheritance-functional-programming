'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const classCar = new VehicleClass.Car('classCar');
console.log(classCar.name, classCar.drive(), classCar.stop());

const classCycle = new VehicleClass.Motorcycle('classBike');
console.log(classCycle.name, classCycle.wheelie(), classCycle.stop());

// Implement a car and motorcycle using a Factory

const factoryCar = VehicleFactory.CarFactory('factoryCar');
console.log(factoryCar.name, factoryCar.drive(), factoryCar.stop());

const factoryBike = VehicleFactory.MotorcycleFactory('factoryBike');
console.log(factoryBike.name, factoryBike.wheelie(), factoryBike.stop());
