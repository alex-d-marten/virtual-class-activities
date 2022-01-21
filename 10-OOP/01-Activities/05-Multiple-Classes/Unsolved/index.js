// importing two JS files needed from their paths
const Store = require('./store');
// with the {} we are only importing the toys array
const { toys } = require('./toy');

// creating a new store here with a stock of the toys object
const store = new Store("Big Al's Toy Barn", toys);

// greetings
store.welcome();
// sold 3 action figures and a rare toy 
store.processProductSale('Action Figure');
store.processProductSale('Action Figure');
store.processProductSale('Rare Toy');
store.processProductSale('Action Figure');

// Should return 'out of stock'
store.processProductSale('Rare Toy');

// Should return restocked
store.replenishStock('Rare Toy', 2);
store.processProductSale('Rare Toy');

// Should return 80.95
store.printRevenue();
