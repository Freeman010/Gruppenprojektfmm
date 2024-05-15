import unitdata from "./unitdata.js";
import teams from "./teams.js"
import readline from "readline";
import Fleet from "./fleet.js";
import { AsyncLocalStorage } from "async_hooks";
import Kampfsystem from "./kampfsystem.js";
class Player {
    constructor(starterFleet) {
        this.getStartFleets();
        //console.log(...teams.starterFleet)
        this.fleet = this.startFleets[starterFleet - 1];
        for (let i = 0; i < 10; i++) {
            this.planetsDone.push(false);
        }
    }
    startFleets = [];
    planetsDone = [];
    starterFleetname = "";
    fleet;
    points = 0;
    pointsMultiply = 100;
    fightCounter = 0;
    winGame = false;
    isGameWon() {

        for (let i = 0; i < this.planetsDone.length; i++) {
            if (this.planetsDone[i] === false) { winGame = false; break; }
            else { this.winGame = true; }
        }
    }
    getStartFleets() {
        this.startFleets.push(teams.titanenBund);
        this.startFleets.push(teams.sturmFlotte);
    }
}
let planets = [
    { id: 1, loot: 5000, maxLoot: 10000 },// loot von 0 auf 5000 geändert
    { id: 2, loot: 20000, maxLoot: 20000 },
    { id: 3, loot: 30000, maxLoot: 30000 },
    { id: 4, loot: 40000, maxLoot: 40000 },
    { id: 5, loot: 50000, maxLoot: 50000 },
    { id: 6, loot: 60000, maxLoot: 60000 },
    { id: 7, loot: 70000, maxLoot: 70000 },
    { id: 8, loot: 80000, maxLoot: 80000 },
    { id: 9, loot: 90000, maxLoot: 90000 },
    { id: 10, loot: 100000, maxLoot: 100000 },
];

function getLoot(planetnumber) {
    // wird aufgerufen, wenn handleFight -> win
    let loot = planets[planetnumber].loot;
    if (player.fleet.actualCargo + loot >= player.fleet.maxCargo) {
        player.fleet.actualCargo += player.fleet.maxCargo - player.fleet.maxCargo;
        loot = player.fleet.maxCargo - player.fleet.actualCargo;

    } else {
        player.fleet.actualCargo += loot;
    }
    player.fleet.ressources += loot;
    player.fleet.actualCargo += loot;
    planets[planetnumber].loot -= loot;
    planets[planetnumber].loot = planetnumber * 2500;
    player.planetsDone[planetnumber] = true;

    return loot;
}

async function createMenu(options, callText) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log(callText);

    options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });

    async function askForChoice() {
        return new Promise((resolve, reject) => {
            rl.question("", (answer) => {
                const choice = parseInt(answer);
                if (isNaN(choice) || choice < 1 || choice > options.length) {
                    console.log(
                        "Ungültige Auswahl. Bitte geben Sie eine Nummer zwischen 1 und " +
                        options.length +
                        " ein."
                    );
                    reject(new Error("Invalid choice"));
                } else {
                    console.log("Sie haben '" + options[choice - 1] + "' ausgewählt.");
                    resolve(choice);
                }
            });
        });
    }

    let answer = await askForChoice().catch((error) => { });

    while (!answer) {
        answer = await askForChoice().catch((error) => { });
    }

    rl.close();

    return answer;
}

//const player = new Player(createMenu(["die Sturmflotte", "den Titanenbund"]))
const startFleetOptions = ["den Titanenbund", "die Sturmflotte"];
const attackPlanetOptions = [];
for (let i = 0; i < 10; i++) {
    attackPlanetOptions.push(`Planet Nr.${i + 1}`);
}
let player;
let gameFinished = false;
async function executeMenu() {

    if (!player) {
        const startFleetIndex = await createMenu(startFleetOptions, "Welche Startflotte wählst du");
        player = new Player(startFleetIndex);
    }

    while (player.fleet.fleetArray > 0 || !player.winGame) {
        const targetPlanetId = await createMenu(attackPlanetOptions, "Welchen Planeten greifst du an");
        //Kampfsystem.handleFight(player.fleet, [...teams.planets][targetPlanetId]);

        //let result = Kampfsystem.handleFight(player.fleet, teams.planets[targetPlanetId - 1]);
        //let clone = Object.assign({}, userDetails)
        //let defenderFleet = new Fleet([...teams.planets[targetPlanetId - 1].fleetArray]);
        let defenderPlanet = teams.planets[targetPlanetId - 1]()
        let result = Kampfsystem.handleFight(player.fleet, defenderPlanet);
        player.fightCounter++;

        let playerWinFight;
        //console.log("test");
        if (result[0].fleetArray.length > 0 && result[1].fleetArray.length === 0) {
            playerWinFight = true

            console.log(`Du hast den Kampf gewonnen und ${getLoot(targetPlanetId - 1)} ressourcen erbeutet`)
        }
        else { playerWinFight = false; }
        console.log(`du hast noch ${player.fleet.fleetArray.length} schiffe verbleibend und ${player.fleet.ammo} Munition übrig`)

        console.log("munition kaufen weiteren planeten angreifen ???")
    }
    console.log(`Du hast das Spiel gewonnen , dein Highscore beträgt ${player.fleet.ressources * (100 - player.fightCounter / 10)}`)
    //console.log(player.fleet.fleetArray.length);
    //console.log(teams.planets[targetPlanetId].fleetArray.length);
    //console.log(targetPlanetId);
    //break;
    //}
    //console.log(test);
    //TODO
    //console.log(player);
    //console.log(answer2);
    //console.log("");
    //console.log(player.fleet);
}
console.log(`Wilkommen bei Nebula Odyssey`);
console.log(`du muzzt zwischen 2 starter Flotten wählen`);

executeMenu();

/**/

//console.log(`Wilkommen bei Nebula Odyssey`);
//console.log(`du must zwischen 2 starter Flotten wählen`);

//const player = new Player(createMenu(["die Sturmflotte", "den Titanenbund"]));
// wenn die namen hier geändert werden ,
// müssen die in der player klasse auch geändert werden

//console.log(planets.length);
//console.log("Du kannst jetzt 10 verschiedene planeten angreifen, von Planet Nr.1 bis Nr10 von leicht bis schwer");

//console.log("wähle dein Angriffsziel")





/*
1. Erstellen von vorgefertigten Flotten, die der Spieler sich auswaehlen kann
2. Zwei Anfangsflotten aus denen gewaehlt werden kann */

/*  Kleine Werft:   Kleiner Transporter, Leichter Jaeger, Schwerer Jaeger, Bomber, Fregatte
    Mittlere Werft: Großer Transporter, Zerstörer, Kreuzer, Flugdeckkreuzer

relevante Werte:
this.name = "Fregatte";
this.steelcosts = 5000;
this.hull = 5000;
this.shield = 1000;
this.firepower = 500;
this.ammoconsume = 100;
this.cargo = 5000;
this.rapidfirevsflakgeschütz = 5;
*/
