import unitdata from "./unitdata.js";
import unit from "./unit.js";
import fleet from "./fleet.js";

function createArmy(shipType, amount, target) {
  for (let i = 0; i < amount; i++) {
    target.push(new shipType());
  }
  return target;
}
function shuffle(units) {
  // Fisher-Yates-Shuffle , mischt das Array zufaellig durch
  if (Array.isArray(units)) {
    for (let i = units.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [units[i], units[j]] = [units[j], units[i]];
    }
  }
  // gibt neu gemischtes array zurück
  return units;
}
let attackerArray = [];
let defenderArray = [];
createArmy(unitdata.FlugDeckKreuzer, 200, attackerArray);
createArmy(unitdata.KleinerTransporter, 0, attackerArray);
createArmy(unitdata.KleinerTransporter, 0, defenderArray);
createArmy(unitdata.Bomber, 200, defenderArray);
let attacker = new fleet([]);
let defender = new fleet([]);
attacker.addShips(attackerArray);
defender.addShips(defenderArray);

//attacker.setAmmo(50000);
//defender.setAmmo(15000);

function handleFight(attackerFleet, defenderFleet) {
  const attacker = attackerFleet.fleetArray;
  const defender = defenderFleet.fleetArray;
  shuffle(attacker);
  shuffle(defender);

  let attackerCantShootCounter = 0;

  let attackerCounter = 0;
  let count = 0;
  let defenderCounter = 0;
  while (attacker.length > 0 && defender.length > 0) {
    if (attackerCantShootCounter > Math.floor(attacker.length / 5)) {
      console.log(
        `Der Angriffsflotte ist die munition ausgegangen und sie ist geflohen`
      );
      break;
    }
    if (count % 2 === 0) {
      let defenderIndex = Math.floor(Math.random() * defender.length);
      if (attacker[attackerCounter] instanceof unit) {
        if (attacker[attackerCounter].checkAmmo(attackerFleet)) {
          let isDead = attacker[attackerCounter].angriff(
            defender[defenderIndex]
          );
          if (isDead) {
            defender.splice(defenderIndex, 1);
          }
        } else {
          attackerCantShootCounter += 1;
          console.log(
            `${attacker[attackerCounter].name} hat nicht genug munition zum feuern.`
          );
        }

        attackerCounter++;
      }
    } else {
      let attackerIndex = Math.floor(Math.random() * attacker.length);
      if (defender[defenderCounter] instanceof unit) {
        if (defender[defenderCounter].checkAmmo(defenderFleet)) {
          let isDead = defender[defenderCounter].angriff(
            attacker[attackerIndex]
          );
          if (isDead) {
            attacker.splice(attackerIndex, 1);
          }
        } else {
          console.log(
            `${defender[defenderCounter].name} hat nicht genug munition zum feuern.`
          );
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
//console.log(attacker.fleetArray.length);
//console.log(defender.fleetArray.length);



//console.log("-----");
let shipArray = [];
shipArray.push(unitdata.LeichterJaeger);
shipArray.push(unitdata.SchlachtKreuzer);
shipArray.push(unitdata.SchwererJaeger);

let currentRessources = 50000;

let myBuyedShips = [];

while (shipArray.length > 0) {
  let randomIndex = Math.floor(Math.random() * shipArray.length);
  let randomClass = shipArray[randomIndex];
  let randomShip = new randomClass();
  if (currentRessources - randomShip.steelcosts >= 0) {
    currentRessources -= randomShip.steelcosts;
    myBuyedShips.push(randomShip);
  } else {
    shipArray.splice(randomIndex, 1);
  }
}

export default {
  handleFight,
}
//console.log(attacker.maxCargo);
//console.log(attacker.ammo);
//console.log("---");
//attacker.addShips(createArmy(unitdata.LeichterJaeger, 500, []));
//console.log(attacker.maxCargo);
//console.log(attacker.ammo);
//console.log(bomber);
//console.log(currentRessources);
//console.log(myBuyedShips.length);
//console.log(myBuyedShips);
