![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================


## Lab 02 - Classes, Inheritance, and Functional Programming

### Author: Chris Kozlowski

### Links and Resources
* [Submission PR](https://github.com/401-advanced-javascript-cdk/lab02-classes-inheritance-functional-programming/pull/1)
* [Travis](https://travis-ci.com/401-advanced-javascript-cdk/lab02-classes-inheritance-functional-programming)

### Modules
#### `objects/vehicle-class.js`
##### Exported Values and Methods
###### `Car(name)` -> `object`
Returns a car object.  Created with a Class constructor that extends from the Vehicle class.
###### `Motocycle(name)` -> `object`
Returns a motorcycle object.  Created with a Class constructor that extends from the Vehicle class.
###### `drive()` -> `string`
###### `stop()` -> `string`
Class methods inherited from the Vehicle class.  Returns a response string.
###### `wheelie()` -> `string`
Class method from Motorcycle Class constructor which returns a response string.

#### `objects/vehicle-factory.js`
##### Exported Values and Methods
###### `CarFactory(name)` -> `object`
Returns a car object created from a factory function.
###### `MotorcycleFactory(name)` -> `object`
Returns a motorcycle object created from a factory function.
###### `drive()` -> `string`
###### `stop()` -> `string`
Methods inherited from the Vehicle function.  Returns a response string.
###### `wheelie()` -> `string`
Method from MotorcycleFactory which returns a response string.

#### Tests
* `npm test`
* objects
  * Cars have 4 wheels
  * Bikes have 2 wheels
  * Bikes can wheelie
  * All vehicles can drive and stop
* list
  * Creates an empty list when initially called
  * Has a properly tracked length value
  * Can perform the push method and checks that an argument is present
  * Can perform the unshift method and checks that an argument is present
  * Can pop an item off the end of the data set
  * Can shift an item off the front of the data set
  * Can apply a callback with forEach
  * Checks that the callback is a function
