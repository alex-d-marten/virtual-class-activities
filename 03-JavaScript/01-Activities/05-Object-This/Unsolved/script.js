// TODO: What is `this` referring to here?
  // This is referring the the topmost object of the webpage and in this case it is window
console.log(this);

// TODO: What is `this` referring to here?
  // This is referring the the topmost object of the webpage and in this case it is window
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// TODO: What is `this` referring to here? What will be logged in the console?
  // This is referring to the child object here and is logging 20 to the console.
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};

// TODO: What is `this` referring to here? What will be logged in the console?
  // This is referring the investment object within the investor object and is logging 5750 to the console.
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

// TODO: Call the `helloThis` function and the object methods to check results in the console
helloThis();
child.ageTenYears();
investor.investment.investmentGrowth();