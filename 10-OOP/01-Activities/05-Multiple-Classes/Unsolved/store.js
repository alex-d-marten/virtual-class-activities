// creating a class Store
class Store {
  // declaring constructor function with inputs for name and stock
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  // method for when we sell something
  processProductSale(name) {
    // 
    this.stock.forEach(item => {
      if (item.name === name) {
        if (item.count > 0) {
          // item sold, subtract from the total item count
          item.count--;
          // the item price is added to the revenue property
          this.revenue += item.price;
          // log the item and cost
          console.log(`Purchased ${item.name} for ${item.price}`);
          // if item count is 0
        } else {
          console.log(`Sorry, ${item.name} is out of stock!`);
        }
      }
    });
  }

  // method for replenishing an item
  replenishStock(name, count) {
    this.stock.forEach(item => {
      if (item.name === name) {
        // added 1 to count
        item.count += count;
        // log the replenished item and count
        console.log(`Replenished ${item.name} by ${item.count}`);
      }
    });
  }

  // printing total revenue
  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  // Welcome to my store
  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
