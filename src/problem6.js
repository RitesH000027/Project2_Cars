function getBMWAndAudiCars(inventory) {
  const BMWAndAudiCars = inventory.filter(car => ['BMW', 'Audi'].includes(car.car_make));
  return BMWAndAudiCars;
}

module.exports = getBMWAndAudiCars;
