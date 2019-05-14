'use strict';

const Vehicle = () => ({
  drive: () => 'Moving Forward',
  stop: () => 'Stopping'
});

function CarFactory(name) {
  let car = Object.assign(
    {},
    {name},
    {wheels: 4},
    Vehicle()
  );
  return car;
};

function MotorcycleFactory(name) {
  let bike = Object.assign(
    {},
    {name},
    {wheels: 2},
    {wheelie: () => 'Whee!'},
    Vehicle()
  );
  
  return bike;
}

module.exports = {CarFactory, MotorcycleFactory};