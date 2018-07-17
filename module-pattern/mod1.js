// Modification 1 of module pattern example
// Goals:
// 1. Experiment with global variable
// Basic module pattern
var zooKeeper = (function() {
    animals = []; // we try to access global variable

    function listAnimals() {
        console.log('Animals:');
        animals.forEach(function(animal) {
            console.log(animal);
        });
    }

    function addAnimal(animal) {
        animals.push(animal);
    }

    function removeAnimal(animal) {
        var removedIndex = animals.indexOf(animal);
        delete(animals[removedIndex]);
    }

    return {
        listAnimals: listAnimals,
        addAnimal: addAnimal,
        removeAnimal: removeAnimal
    };
})();

// Normal scenario
console.log('1. Normal scenario')
zooKeeper.listAnimals();
var i = 0;
for (i = 0; i < 5; i++) {
    zooKeeper.addAnimal('cat ' + i);
}
zooKeeper.listAnimals();
zooKeeper.removeAnimal('cat 3');
zooKeeper.listAnimals();

// Accessing module property
console.log('2. Accessing module property')
console.log('listAnimals', zooKeeper.listAnimals); // A public function
console.log('animals', zooKeeper.animals); // Undefined because behaves like a 'private property'

// Let's try to access animals variable
// We'll see the difference here
console.log('3. Accessing private property')
try {
    console.log(animals); //animals is defined with the value of module's animals variable
} catch (e) {
    console.log(e);
}

// Let's try to create animals variable in global scope, and see if it able to overwrite animals variable inside module or not
// Another difference here
console.log('4. Create global variable with private property name')
var animals = ['Not an animal'];
zooKeeper.listAnimals(); // List of animals is overwritten;

// Let's try to overwrite module's property
console.log('5. Overriding module property')
zooKeeper.listAnimals = function() {
    console.log('Hello :)');
}
zooKeeper.listAnimals(); //It works :)
