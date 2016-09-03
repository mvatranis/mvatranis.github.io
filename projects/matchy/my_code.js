// step 1 //
var animal = {};
animal.species = 'dog'; //dot notation
animal['name'] = 'Fluffy'; //array access
animal.noises = [];
console.log(animal);

// step 2 //
animal['noises'].push('woof');
animal['noises'].unshift('bark');
animal['noises'].push('arf');
console.log(animal['noises'].length);
console.log(animal['noises'].length - 1);
console.log(animal.noises);

// step 3 //
animal['noises'].push('grr');
console.log(animal);

// step 4 //
console.log(animal.name);
console.log([0]);

// step 6 //
var animals = []; //because yay empty arrays
animals.push(animal);
console.log(animals);
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);

var pig = {
    species: 'pig',
    name: 'Miss Piggy',
    noises: ['oink', 'oh kermie', 'whee!', 'i love diamonds']
};
animals.push(pig);

var bear = {
    species: 'bear',
    name: 'Fozzie Bear',
    noises: ['wakka wakka wakka', 'rawr', 'wanna hear a joke?', 'argh']
};
animals.push(bear);

console.log(animals);

// step 7 //
var friends = [];

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomIndex = randomIntBetween(0, animals.length - 1);

console.log(friends);

// Part 2 //

// step 1 //
function search(name) {
    var animalNames = [];  //create new array to index names in search
    for (var x in animals) { //using for-in to loop thru properties of the animals object 
        animalNames.push((animals[x].name).toLowerCase()); //push variable animalNames in array to access the name and force lowercase
    }
    var index = animalNames.indexOf(name.toLowerCase()); 
    if (index !== -1) {
        return animals[index];
    }
    else {
        return null;
    }

}

// step 2 //
function edit(name, object) {
    for (var x in animals) {  //best for looping objects
        if (name === animals[x].name) {
            animals[x] = object;
        }
    }
}

// step 3 //
function remove(name) {
    for(var i = 0; i < animals.length; i++) { //best for looping in array
        if (animals[i].name === name) return animals.splice(i, 1)[0];

    }
}

// if(animals[i].name === name) return animals.splice(i, 1)[0] //<--- invocation of splice is an array "expression"

// step 4 //
function create(animal) {
        if (animal.name.length && animal.species.length) {
            const names = animals.map(function(animal) {
                return animal.name;
            });
            if(names.indexOf(animal.name) === -1) return animal.push()[0];   //indexOf position in array... does it appear in the array?
        }
    }