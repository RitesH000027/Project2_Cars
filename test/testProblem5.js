const countCarsOlderThanYear = require('../src/problem5');

const inventory = require('../inventory');
const year = 2000;
const count = countCarsOlderThanYear(inventory, year);

console.log(`Number of cars older than ${year}: ${count}`);
