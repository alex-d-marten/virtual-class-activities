class Character {
  // TODO: Add a constructor
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  printStats() {
    console.log(this.name, this.strength, this.hitPoints);
  }
  isAlive() {
    if(this.hitPoints <= 0) {
      return false;
    }
    return true;
  }
  attack(opponent) {
    if (this.strength > opponent.hitPoints) {
      opponent.hitPoints = 0;
      console.log(opponent.name + " was attack by " + this.name);
    }
    else {
      opponent.hitPoints -= this.strength;
      console.log(opponent.name + " was attack by " + this.name);
    }
    
  }
}

// Creates two unique characters using the "character" constructor
const grace = new Character('Grace', 30, 75);
const dijkstra = new Character('Dijkstra', 20, 105);

// This keeps track of whose turn it is
let graceTurn = true;

grace.printStats();
dijkstra.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grace.isAlive() || !dijkstra.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
  } else if (graceTurn) {
    grace.attack(dijkstra);
    dijkstra.printStats();
  } else {
    dijkstra.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 2000);
