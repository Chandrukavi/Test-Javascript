
// ------------Challenge 1--------//

const numbers = [1, 1, 2, 3, 5];

const Add = numbers.map(number => number + 5);

console.log(Add);

//---------- --Challenge 2------------

const words = ["planes", "trains", "automobiles"];

const slice=words.map(word=>word.endsWith('s') ? word.slice(0,-1) : word)

console.log(slice);

//---------- --Challenge 3--------------
const Input = ["planes", "trains", "automobiles"];

const first=Input.map(First=>First[0])
console.log(first);

//---------- --Challenge 4--------------

const capital = ["planes", "trains", "automobiles"];

const firstCapital=capital.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
console.log(firstCapital);


//---------- --Challenge 5---------------


const pets = ["goldfish", "dog", "turtle", "tiger"]

const shortPets = pets.filter(pet => pet.length <= 5);
console.log(shortPets);

//---------- --Challenge 6---------------
const petsStart = pets.filter(pet => pet.startsWith('t'));
console.log(petsStart);

//---------- --Challenge 7---------------

const number = [1, 1, 2, 3, 5];

const numbervalue = number.filter(number => number > 4);

console.log(numbervalue);

//---------- --Challenge 8---------------

const evenNumbers = number.filter(number => number % 2 === 0);
console.log(evenNumbers);













