import unitdata from "./unitdata.js";
import teams from "./teams.js"
import readline from "readline";
import Fleet from "./fleet.js";
import { AsyncLocalStorage } from "async_hooks";
import Kampfsystem from "./kampfsystem.js";
import kampfsystem from "./kampfsystem.js";
class Player {
    constructor(starterFleet) {
        this.getStartFleets();
        //console.log(...teams.starterFleet)
        this.fleet = this.startFleets[starterFleet - 1];
    }
    startFleets = [];

    starterFleetname = "";
    fleet;
    ressources = 0;
    points = 0;
    pointsMultiply = 100;
    fightCounter = 0;
    getStartFleets() {
        this.startFleets.push(teams.titanenBund);
        this.startFleets.push(teams.sturmFlotte);
    }
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
async function executeMenu() {

    if (!player) {
        const startFleetIndex = await createMenu(startFleetOptions, "Welche Startflotte wählst du");
        player = new Player(startFleetIndex);
    }


    const targetPlanetId = await createMenu(attackPlanetOptions, "Welchen Planeten greifst du an");
    Kampfsystem.handleFight(player.fleet, teams.planets[targetPlanetId]);
    //console.log(player);
    //console.log(answer2);
    //console.log("");
    //console.log(player.fleet);
}
console.log(`Wilkommen bei Nebula Odyssey`);
console.log(`du must zwischen 2 starter Flotten wählen`);
executeMenu();

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
