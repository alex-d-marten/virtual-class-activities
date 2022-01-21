var count = 0;

// Storing the button decrement, increment and the count html as variables
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// Setting the number to be displayed in the counter
function setCounterText() {
  countEl.textContent = count;
}

// storing increment handler as a callback function here
var incrementHandler = function() {
  count++;
  setCounterText();
}

// callback functions for keyup and keydown counters
var keyupHandler = function(event) {
  if (event.isComposing || event.code === "ArrowUp") {
    incrementHandler();
  }
};
var keydownHandler = function (event) {
  if (event.isComposing || event.code === "ArrowDown") {
    decrementHandler();
  }
};

// if a J or K key is clicked it will either increase or decrease the count, removing the incrementEl and decrementEl
// before the addEventListener made it so you did not need to click on the box to get the counter to work
addEventListener('keyup', keyupHandler);
addEventListener('keydown', keydownHandler);

// increment count if button is clicked
incrementEl.addEventListener('click', incrementHandler);

// decrement handler callback function
var decrementHandler = function() {
  if(count > 0) {
    count--;
    setCounterText();
  }
}

// Adding an event listener to listen for a click on the decrement button. And upon the click, the counter is
// being decreased and then the callback function setCounterText is being called to update the displayed count 
// Additionally, there is a validation to make sure the number does not get negative
decrementEl.addEventListener('click', decrementHandler);
