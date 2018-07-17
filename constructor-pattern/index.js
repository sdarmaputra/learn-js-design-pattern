// Normal constructor pattern
function Human(name, gender) {
    this.name = name;
    this.gender = gender.toUpperCase() === 'L' ? 1 : 0;
    this.age = 0;
    this.setAge = function(age) {
        this.age = age;
    }
}
var uncleBob = new Human('Uncle Bob', 'L');
uncleBob.setAge(30);
console.log(uncleBob);

// Constructor without 'this' -> will produces empty object
function BadAnimal(name) {
    wings = false;
    feet = false;
}
var fish = new BadAnimal('fish');
console.log(fish);

// Compare to the one that use 'this'
function GoodAnimal(name) {
    this.name = name;
    this.wings = false;
    this.feet = false;
}
var anotherFish = new GoodAnimal('Real Fish');
console.log(anotherFish);

// Inheritance trial
function Vehicle(name) {
    this.name = name;
}
function Car(name, fuelCapacity) {
    Vehicle.call(this, name);
    this.fuelCapacity = fuelCapacity;
}
var newCar = new Car('New Car', 1000);
console.log(newCar);

// Object property modification
function TalkingHuman(name, gender) {
    this.name = name;
    this.gender = gender.toUpperCase() === 'L' ? 1 : 0;
    this.sayHello = function() {
        console.log('Hello!');
    }
}
var uncleSam = new TalkingHuman('Uncle Sam', 'L');
console.log(uncleSam);
uncleSam.sayHello();
TalkingHuman.sayHello = function() {
    console.log('Good Bye!');
}
TalkingHuman.age = 30;
console.log(uncleSam);
uncleSam.sayHello();
uncleSam.sayHello = function() {
    console.log('Have a nice day!');
}
uncleSam.age = 30;
console.log(uncleSam);
uncleSam.sayHello();

// Using prototype
function GoodTalkingHuman(name, gender) {
    this.name = name;
    this.gender = gender.toUpperCase() === 'L' ? 1 : 0;
}
GoodTalkingHuman.prototype.sayHello = function() {
    console.log('Hello');
}
var uncleSam = new GoodTalkingHuman('Uncle Sam', 'L');
console.log(uncleSam);
uncleSam.sayHello();
GoodTalkingHuman.sayHello = function() {
    console.log('Good Bye!');
}
console.log(uncleSam);
uncleSam.sayHello();
GoodTalkingHuman.prototype.sayHello = function() {
    console.log('Good Bye!');
}
console.log(uncleSam);
uncleSam.sayHello();
uncleSam.sayHello = function() {
    console.log('Have a nice day!');
}
console.log(uncleSam);
uncleSam.sayHello();

// Another constructor approach without 'this'
function CuteAnimal(name) {
    var _name = name;
    var animal = {};
    animal.name = _name;
    animal.sayHello = function() {
        console.log('Helloww!');
    }
    return animal;
}
var cuteCat = new CuteAnimal('Cat');
console.log(cuteCat);
cuteCat.sayHello();
cuteCat.name = 'Not a cat';
cuteCat.sayHello = function() {
    console.log('Rawrrr!');
}
console.log(cuteCat);
cuteCat.sayHello();
var cuteHamster = CuteAnimal('Hamster');
console.log(cuteHamster );
cuteHamster.sayHello();
cuteHamster.name = 'Not a hamster';
cuteHamster.sayHello = function() {
    console.log('Rawrrr!');
}
console.log(cuteHamster);
cuteHamster.sayHello();

// Let's compare with the previous version
function NotCuteAnimal(name) {
    this.name = name;
    this.sayHello = function() {
        console.log('Helloww!');
    }
}
var notCuteCat = new NotCuteAnimal('Cat');
console.log(notCuteCat);
notCuteCat.sayHello();
notCuteCat.name = 'Not a cat';
notCuteCat.sayHello = function() {
    console.log('Rawrrr!');
}
console.log(notCuteCat);
notCuteCat.sayHello();
// We'll find a problem with this:
try {
    var notCuteHamster = NotCuteAnimal('Hamster');
    console.log(notCuteHamster ); // <- It'll become undefined
    notCuteHamster.sayHello();
    notCuteHamster.name = 'Not a hamster';
    notCuteHamster.sayHello = function() {
        console.log('Rawrrr!');
    }
    console.log(notCuteHamster);
    notCuteHamster.sayHello();
} catch (e) {
    console.log(e);
}

