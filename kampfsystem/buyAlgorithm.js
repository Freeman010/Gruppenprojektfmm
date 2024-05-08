import unitdata from "./unitdata.js";
import unit from "./unit.js";


const currentResources = {
    steel: 4000
}

let allShips = [];
for (let className in unitdata) {
    let ShipClass = unitdata[className];
    allShips.push(new ShipClass());
}

let currentFleet = [];

function canAfford(ship) {
    return currentResources.steel >= ship.steelcosts;
}

function buyShip(ship) {
    currentResources.steel -= ship.steelcosts;
    currentFleet.push(ship);
    console.log(`You've bought a ${ship.name}!`);
    console.log('Remaining Steel:', currentResources.steel);
}

function randomShip() {
    let randomIndex = Math.floor(Math.random() * allShips.length);
    return allShips[randomIndex];
}

function removeShip(ship) {
    const index = allShips.indexOf(ship);
    if (index !== -1) {
        allShips.splice(index, 1);
    }
}

function startBuy() {
    console.log('Welcome to Imperial Industries, we have some nice ships for you!');
    while (allShips.length > 0) {
        const ship = randomShip();
        if (canAfford(ship)) {
            buyShip(ship);
        } else {
            removeShip(ship);
        }
    }
    console.log('No more ships to purchase. Your current fleet:', currentFleet.map(ship => ship.name));
}

console.log(startBuy());

//console.log(currentResources);