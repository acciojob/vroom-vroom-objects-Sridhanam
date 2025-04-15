function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Step 2: getMakeModel Method
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Step 3: SportsCar Constructor
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call Car constructor
    this.topSpeed = topSpeed;
}

// Step 4: Inheritance
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Step 5: getTopSpeed Method
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example Usage
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200