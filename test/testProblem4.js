const getAllCarYears = require('../src/problem4');

const inventory = require('../inventory');
const carYears = getAllCarYears(inventory);

console.log(carYears);
