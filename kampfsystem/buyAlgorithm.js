import unitdata from "./unitdata.js";
import Unit from "./unit.js";
import readlineSync from 'readline-sync';
import chalk from 'chalk';

let vault = 0;
let currentResources = 60000;
let currentFleet = [];

console.log("-".repeat(50)); /*<-- Trennstriche*/
console.log(chalk.red.bold("Willkommen bei Imperial Industries, wir haben eine tolle Auswahl an Schiffblaupausen für sie im Angebot!"));

function playerDecision() {
  let choices = ['Ressourcen einlagern', 'Schiffe bauen'];
  let index = readlineSync.keyInSelect(choices, chalk.red.bold("Womit kann ich ihnen heute helfen? Etwas einlagern oder wollen Sie vielleicht neue Schiffe bauen"));
  switch(index) {
    case 0: vault += currentResources;
    console.log(`Sie haben ${chalk.yellow(currentResources)} ${chalk.grey("Einheiten Stahl")} eingelagert. Dein Speicher hat: ${chalk.yellow(vault)} ${chalk.grey("Einheiten Stahl")}`);
    currentResources = 0;
    break;
  case 1: 
    while (currentResources > 200) {
    const ship = randomShip();
    if (canAfford(ship)) {
      buyShip(ship);
    } else {
      removeShip(ship);
    }
  }
  break;
  default: console.log('Ungueltige Auswahl.');
  }
}

function canAfford(ship) {
  return currentResources >= ship.steelcosts;
}

function buyShip(ship) {
  currentResources -= ship.steelcosts;
  currentFleet.push(ship);
  console.log(`Du hast ${chalk.green(ship.name)} gebaut!`); 
  console.log(chalk.grey("Verbleibender Stahl:"), currentResources);
};

function randomShip() {
  let randomIndex = Math.floor(Math.random() * (unitdata.onlyShips.length));
  return new unitdata.onlyShips[randomIndex]();
}

function removeShip(ship) {
  const index = unitdata.onlyShips.indexOf(ship);
  if (index !== -1) {
    unitdata.onlyShips.splice(index, 1);
  }
}

console.log("-".repeat(50)); /*<-- Trennstriche*/


while (currentResources > 200) { 
  playerDecision();
}

if (currentResources <= 200) {
   console.log(`Keine Ressourcen mehr zum Bau verfügbar.\n${chalk.underline(`Deine momentane Flotte`)}:`); /* Anzeige der momentanen flotte 1/2 */
}

let shipCount = {}; /* zählt Schiffe zusammen */
currentFleet.forEach((ship) => { 
  const shipName = ship.name;
  if (shipCount[shipName]) {
    shipCount[shipName]++;
  } else {
    shipCount[shipName] = 1;
  }
});

for (let ship in shipCount) {
  console.log(`"${chalk.green(ship)}": ${chalk.bold(shipCount[ship])}`); /* Anzeige der momentanen flotte 2/2 */
}

console.log("-".repeat(50)); /*<-- Trennstriche*/