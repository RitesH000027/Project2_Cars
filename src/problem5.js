function countCarsOlderThanYear(inventory, year = 2000) {
  const olderCars = inventory.filter(car => car.car_year < year);
  return olderCars.length;
}

module.exports = countCarsOlderThanYear;
