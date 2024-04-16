function getLastCar(inventory) {
  return inventory.reduce((lastCar, currentCar) => currentCar, null);
}

module.exports = getLastCar;
