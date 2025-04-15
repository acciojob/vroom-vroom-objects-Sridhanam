function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

Car.prototype.getCarDetails = function() {
  return `${this.year} ${this.make} ${this.model}`;
};

// SportsCar constructor function inheriting from Car
function SportsCar(make, model, year, topSpeed) {
  Car.call(this, make, model, year); // Call Car constructor
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

SportsCar.prototype.displayCarInfo = function() {
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
};

// Example Usage
const car = new SportsCar("Ferrari", "Testarossa", 1984, 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200
console.log(car.getCarDetails()); // Output: 1984 Ferrari Testarossa
car.displayCarInfo();
