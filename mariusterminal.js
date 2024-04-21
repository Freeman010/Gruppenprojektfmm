class Einheit {
  name;
  schaden;
  huelle;
  schild;
  angriff(gegner) {
    let isDead;
    let verbleibenderSchild = gegner.schild - this.schaden;
    if (verbleibenderSchild < 0) {
      gegner.huelle += verbleibenderSchild;
      gegner.schild = 0;
    }
    if (gegner.huelle < 0) {
      gegner.huelle = 0;
      isDead = true;
    } else {
      isDead = false;
    }
    return isDead;
  }
}

class kleinerJaeger extends Einheit {
  constructor() {
    super();
    this.name = "Kleiner Jaeger";
    this.schaden = 10;
    this.huelle = 20;
    this.schild = 5;
  }
}

class fregatte extends Einheit {
  constructor() {
    super();
    this.name = "Fregatte";
    this.schaden = 20;
    this.huelle = 50;
    this.schild = 5;
  }
}

let jaegerEins = new kleinerJaeger();
let fregatteEins = new fregatte();

let attacker = [];
let defender = [];

function createArmy(shipType, amount) {
  let result = [];
  for (let i = 0; i < amount; i++) {
    result.push(new shipType());
  }
  return result;
}

function shuffle(units) {
  // Fisher-Yates-Shuffle , mischt das Array zufällig durch
  if (Array.isArray(units)) {
    for (let i = units.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [units[i], units[j]] = [units[j], units[i]];
    }
  }
  // gibt neu gemischtes array zurück
  return units;
}

attacker = createArmy(kleinerJaeger, 5);

defender = createArmy(fregatte, 5);

function handleFight(attacker, defender) {
  shuffle(attacker);
  shuffle(defender);
  let attackerCounter = 0;
  let count = 0;
  let defenderCounter = 0;
  while (attacker.length > 0 && defender.length > 0) {
    if (count % 2 === 0) {
      let defenderIndex = Math.floor(Math.random() * defender.length);
      if (attacker[attackerCounter] instanceof Einheit) {
        let isDead = attacker[attackerCounter].angriff(defender[defenderIndex]);
        if (isDead) {
          defender.splice(defenderIndex, 1);
        }
        attackerCounter++;
      } else {
        let attackerIndex = Math.floor(Math.random() * attacker.length);
        if (defender[defenderCounter] instanceof Einheit) {
          let isDead = defender[defenderCounter].angriff(
            attacker[attackerIndex]
          );
          if (isDead) {
            attacker.splice(attackerIndex, 1);
          }
          defenderCounter++;
        }
      }
      count++;
    }
  }
}

handleFight(attacker, defender);
console.log(attacker);
console.log(defender);
