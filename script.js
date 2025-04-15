function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function inheriting from Car
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to inherit properties
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);

// Restore constructor reference
SportsCar.prototype.constructor = SportsCar;

// Adding method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Expose the constructors
window.Car = Car;
window.SportsCar = SportsCar;