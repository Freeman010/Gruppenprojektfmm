import unitdata from "./unitdata.js";
import Unit from "./unit.js";
import readlineSync from 'readline-sync';
import chalk from 'chalk';

let vault = 0;
let ammoPrice = 0.1;
let ammo = 0;
let currentResources = 5000;
let currentFleet = [];

console.log("-".repeat(50)); /*<-- Trennstriche*/
console.log(chalk.red.bold("Willkommen bei Imperial Industries, wir haben eine tolle Auswahl an Schiffblaupausen für sie im Angebot!"));

function playerDecision() { /* Readline Sync Start - 3 verschiedene auswahlen */
  let choices = ['Ressourcen einlagern', 'Schiffe bauen', `Munition kaufen | Munitionspreis: ${ammoPrice} Stahl pro Mutitionseinheit`];
  let index = readlineSync.keyInSelect(choices, chalk.red.bold("Womit kann ich ihnen heute helfen? Etwas einlagern, wollen Sie vielleicht neue Schiffe bauen oder Munition kaufen?"));
  switch(index) {
    case 0: vault += currentResources; /* --------------- 1 Auswahl - Ressourcen werden gelagert --------------- */
    console.log(`Sie haben ${chalk.yellow(currentResources)} ${chalk.grey("Einheiten Stahl")} eingelagert. Dein Speicher hat: ${chalk.yellow(vault)} ${chalk.grey("Einheiten Stahl")}`);
    currentResources = 0;
    break;
  
    case 1: /* --------------- 2 Auswahl - Schiffe werden gekauft -> function buyShip --------------- */
    while (currentResources > 200) {
    const ship = randomShip();
    if (canAfford(ship)) {
      buyShip(ship);
    } else {
      removeShip(ship);
    }
  }
  break;
  
  case 2: /* --------------- 3 Auswahl - Ammo wird gekauft -> function buyAmmo --------------- */
    buyAmmo(ammoPrice);
  break;
  default: console.log('Ungueltige Auswahl.');
  }
}

function canAfford(ship) {  /* fragt ab ob genug Resources vorhanden sind */
  return currentResources >= ship.steelcosts;
}

function buyShip(ship) {  /* zieht Resources ab und pushed neues ship in die Fleet */
  currentResources -= ship.steelcosts;
  currentFleet.push(ship);
  console.log(`Du hast ${chalk.green(ship.name)} gebaut!`); 
  console.log(chalk.grey("Verbleibender Stahl:"), currentResources);
};

function buyAmmo(ammoPrice) {  /* hier wird die Ammo gekauft */
  let ammoAmount = Math.floor(currentResources / ammoPrice);
  currentResources -= ammoPrice * ammoAmount;
  ammo += ammoAmount;
  console.log(`Du hast ${chalk.cyan.bold(ammoAmount + " " + "Munition")} für ${chalk.grey.bold(ammoPrice + " " + "Einheiten Stahl")} pro Einheit gekauft! Du hast jetzt ${chalk.cyan.bold(ammo+ " " + "Munition")} .`);
};

function randomShip() {  /* wählt ein zufälligen index aus der onlyships liste */
  let randomIndex = Math.floor(Math.random() * (unitdata.onlyShips.length));
  return new unitdata.onlyShips[randomIndex]();
}

function removeShip(ship) {   /* entfernt ein ship aus der liste */
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
   console.log(`Keine Ressourcen mehr zum Bauen oder kaufen verfügbar.\n${chalk.underline(`Deine momentane Flotte`)}:`); /* Anzeige der momentanen flotte 1/2 */
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