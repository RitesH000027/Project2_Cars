function findCarById(inventory, id) {
  const car = inventory.find(car => car.id === id);
  return car;
}

module.exports = findCarById;
