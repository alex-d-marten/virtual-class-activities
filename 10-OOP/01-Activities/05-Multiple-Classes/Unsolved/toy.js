class Toy {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

// creating an array toys with the class Toy and providing inputs
const toys = [
  new Toy('Action Figure', 14.99, 5),
  new Toy('Rare Toy', 17.99, 1)
];

// exporting the class and array
module.exports = {
  Toy,
  toys
};
