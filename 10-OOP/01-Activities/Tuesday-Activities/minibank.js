function MiniBank(balance) {
    this.balance = balance;
    this.getBalance = function() {
      return this.balance;
    };
      
    this.setBalance = function(value) {
        if(typeof value !== 'number') {
            throw "Wrong input";
        }
        this.balance = value;
    }

      // Add a `deposit()` function
      // YOUR CODE HERE
      //
    this.deposit = function(value) {
        if(typeof value !== 'number' || value <= 0) {
            throw "Wrong input";
        }
        this.balance += value;
    }

      // Add a `withdraw()` function
      // YOUR CODE HERE
      //
    this.withdraw = function(value) {
        if(typeof value !== 'number' || value <= 0) {
            throw "Please enter a number that is greater than zero";
        }
        if(value> this.balance) {
            throw "Insufficient funds."
        }
        this.balance -= value;
    }

      this.printBalance = function() {
        console.log(`Balance: ${this.getBalance()}`);
      };
}

const bank = new MiniBank(20000000);
bank.printBalance();
bank.deposit(100);
bank.printBalance();
bank.withdraw(1000000);
bank.printBalance();


module.exports = MiniBank;