import unitdata from "./unitdata.js";
import Unit from "./unit.js";
import readline from 'readline';


let currentResources = 5000;
let currentFleet = [];

function canAfford(ship) {
  return currentResources >= ship.steelcosts;
}

function buyShip(ship) {
  currentResources -= ship.steelcosts;
  currentFleet.push(ship);
  console.log(
    `Du hast \x1b[32m${ship.name}\x1b[0m gekauft!` /*<-- grüne schrift*/
  ); 
  console.log(
    "\x1b[1;90m%s\x1b[0m" /*<-- cyan schrift*/,
    "Verbleibender Stahl:", currentResources
  );
}

function randomShip() {
  let randomIndex = Math.floor(Math.random() * (unitdata.onlyShips.length - 1));
  return new unitdata.onlyShips[randomIndex]();
}

function removeShip(ship) {
  const index = unitdata.onlyShips.indexOf(ship);
  if (index !== -1) {
    unitdata.onlyShips.splice(index, 1);
  }
}

console.log("-".repeat(50)); /*<-- Trennstriche*/

function startBuy() {
  console.log(
    "\x1b[1;91m%s\x1b[0m",
    /*<-- rote schrift*/ "Willkommen bei Imperial Industries, wir haben eine tolle Auswahl an Schiffen für sie im Angebot!"
  );

  console.log("-".repeat(50)); /*<-- Trennstriche*/

  while (currentResources > 200) {
    const ship = randomShip();
    if (canAfford(ship)) {
      buyShip(ship);
    } else {
      removeShip(ship);
    }
  }

  let shipCount = {};
  currentFleet.forEach((ship) => {
    if (shipCount[ship.name]) {
      shipCount[ship.name]++;
    } else {
      shipCount[ship.name] = 1;
    }
  });

  console.log("-".repeat(50)); /*<-- Trennstriche*/

  console.log(
    "Keine Schiffe mehr zum Kauf verfügbar.\nDeine momentane Flotte:"
  );
  for (let shipName in shipCount) {
    console.log(
      `\x1b[32m ${shipName} ${shipCount[shipName]}x \x1b[0m`
    ); /*<-- grüne schrift*/
  }
}


startBuy();
console.log("-".repeat(50)); /*<-- Trennstriche*/
