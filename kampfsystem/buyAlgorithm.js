import unitdata from "./unitdata.js";
import Unit from "./unit.js";
import readlineSync from 'readline-sync';
import chalk from 'chalk';

let vault = 0;
let currentResources = 500000000;
let currentFleet = [];

console.log("-".repeat(50)); /*<-- Trennstriche*/
console.log(chalk.red("Willkommen bei Imperial Industries, wir haben eine tolle Auswahl an Schiffblaupausen für sie im Angebot!"));

function playerDecision() {
  let choices = ['Ressourcen einlagern', 'Schiffe bauen'];
  let index = readlineSync.keyInSelect(choices, chalk.red("Womit kann ich ihnen heute helfen? Etwas einlagern oder wollen Sie vielleicht neue Schiffe bauen"));
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


while (currentResources > 200) {
  playerDecision();
}

if (currentResources <= 200) {
  console.log(`Keine Ressorcem mehr zum Bau verfügbar.\nDeine momentane Flotte:`);
}

let shipCount = {};
currentFleet.forEach((ship) => { // Iterieren Sie über die Schiffe selbst
  const shipName = ship.name; // Extrahieren Sie den Namen des Schiffs
  if (shipCount[shipName]) {
    shipCount[shipName]++;
  } else {
    shipCount[shipName] = 1;
  }
});

console.log(shipCount);
//console.log(currentFleet);

//startBuy();
console.log("-".repeat(50)); /*<-- Trennstriche*/