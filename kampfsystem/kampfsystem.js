import unitdata from "./unitdata.js";
import unit from "./unit.js";

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

attacker = createArmy(unitdata.SchwererJaeger, 5);

defender = createArmy(unitdata.Fregatte, 5);

function handleFight(attacker, defender) {
  shuffle(attacker);
  shuffle(defender);
  let attackerCounter = 0;
  let count = 0;
  let defenderCounter = 0;
  while (attacker.length > 0 && defender.length > 0) {
    /* console.log(count); */
    if (count % 2 === 0) {
      let defenderIndex = Math.floor(Math.random() * defender.length);
      if (attacker[attackerCounter] instanceof unit) {
        let isDead = attacker[attackerCounter].angriff(defender[defenderIndex]);
        if (isDead) {
          defender.splice(defenderIndex, 1);
        }
        attackerCounter++;
      }
    } else {
      let attackerIndex = Math.floor(Math.random() * attacker.length);
      if (defender[defenderCounter] instanceof unit) {
        let isDead = defender[defenderCounter].angriff(attacker[attackerIndex]);
        if (isDead) {
          attacker.splice(attackerIndex, 1);
        }
        defenderCounter++;
      }
    }
    if (
      attackerCounter >= attacker.length &&
      defenderCounter >= defender.length
    ) {
      attackerCounter = 0;
      defenderCounter = 0;
    }
    /*     console.log(attacker.length);
    console.log(defender.length); */
    count++;
  }
}

handleFight(attacker, defender);
/* console.log(attacker);
console.log(defender); */
