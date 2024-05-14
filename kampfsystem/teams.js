import Unit from "./unit.js";
import unitdata from "./unitdata.js";
import Fleet from "./fleet.js";
/*
1. Erstellen von vorgefertigten Flotten, die der Spieler sich auswählen kann
2. Zwei Anfangsflotten aus denen gewählt werden kann */

/*  Kleine Werft:   Kleiner Transporter, Leichter Jäger, Schwerer Jäger, Bomber, Fregatte
    Mittlere Werft: Großer Transporter, Zerstörer, Kreuzer, FlugDeckKreuzer
    Große Werft: Trägerschiff, Schlachtkreuzer, Schlachtschiff

relevante Werte:
this.steelcosts = 5000;
this.hull = 5000;
this.shield = 1000;
this.firepower = 500;
this.ammoconsume = 100;
this.cargo = 5000;
this.rapidfirevsflakgeschütz = 5;

Team 1: Sturmflotte
Dieses Team verkörpert die Dynamik eines Sturms, der schnell und unaufhaltsam Feinde überrennt. Es ist darauf ausgerichtet, mit schnellen und mächtigen Angriffseinheiten den Gegner zu überraschen und schnell territoriale Gewinne zu erzielen.


---------------------------------------------------------------------

Team 2: Titanenbund
Dieses Team repräsentiert eine mächtige Allianz von robusten und starken Einheiten, die eine unüberwindbare Verteidigungslinie bilden. Es setzt auf massive Einheiten und solide Verteidigungsstrategien, um Angriffe abzuwehren und Stand zu halten.

*/
function createArmy(shipType, amount, target) {
  for (let i = 0; i < amount; i++) {
    const newShip = shipType;
    if (Array.isArray(target)) {
      target.push(new newShip());
    }

  }
  return [...target];
}

const sturmFlotte = new Fleet([]);

sturmFlotte.addShips(createArmy(unitdata.LeichterJaeger, 10, []));
sturmFlotte.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
sturmFlotte.addShips(createArmy(unitdata.SchwererJaeger, 10, []));
sturmFlotte.addShips(createArmy(unitdata.Bomber, 5, []));
sturmFlotte.addShips(createArmy(unitdata.Fregatte, 0, []));
sturmFlotte.addShips(createArmy(unitdata.GrosserTransporter, 0, []));
sturmFlotte.addShips(createArmy(unitdata.Zerstörer, 2, []));
sturmFlotte.addShips(createArmy(unitdata.Kreuzer, 0, []));
sturmFlotte.addShips(createArmy(unitdata.FlugDeckKreuzer, 1, []));
sturmFlotte.addShips(createArmy(unitdata.TraegerSchiff, 0, []));
sturmFlotte.addShips(createArmy(unitdata.SchlachtKreuzer, 0, []));
sturmFlotte.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));
//console.log(sturmFlotte);

const titanenBund = new Fleet([]);
titanenBund.addShips(createArmy(unitdata.LeichterJaeger, 10, []));
titanenBund.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
titanenBund.addShips(createArmy(unitdata.SchwererJaeger, 8, []));
titanenBund.addShips(createArmy(unitdata.Bomber, 0, []));
titanenBund.addShips(createArmy(unitdata.Fregatte, 8, []));
titanenBund.addShips(createArmy(unitdata.GrosserTransporter, 0, []));
titanenBund.addShips(createArmy(unitdata.Zerstörer, 2, []));
titanenBund.addShips(createArmy(unitdata.Kreuzer, 0, []));
titanenBund.addShips(createArmy(unitdata.FlugDeckKreuzer, 1, []));
titanenBund.addShips(createArmy(unitdata.TraegerSchiff, 0, []));
titanenBund.addShips(createArmy(unitdata.SchlachtKreuzer, 0, []));
titanenBund.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));
//console.log(titanenBund);

let enemyOne = new Fleet([]);

enemyOne.addShips(createArmy(unitdata.LeichterJaeger, 100, []));
enemyOne.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
enemyOne.addShips(createArmy(unitdata.SchwererJaeger, 50, []));
enemyOne.addShips(createArmy(unitdata.Bomber, 5, []));
enemyOne.addShips(createArmy(unitdata.Fregatte, 3, []));
enemyOne.addShips(createArmy(unitdata.GrosserTransporter, 10, []));
enemyOne.addShips(createArmy(unitdata.Zerstörer, 0, []));
enemyOne.addShips(createArmy(unitdata.Kreuzer, 0, []));
enemyOne.addShips(createArmy(unitdata.FlugDeckKreuzer, 0, []));
enemyOne.addShips(createArmy(unitdata.TraegerSchiff, 0, []));
enemyOne.addShips(createArmy(unitdata.SchlachtKreuzer, 0, []));
enemyOne.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));

let enemyTwo = new Fleet([]);

enemyTwo.addShips(createArmy(unitdata.LeichterJaeger, 100, []));
enemyTwo.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
enemyTwo.addShips(createArmy(unitdata.SchwererJaeger, 50, []));
enemyTwo.addShips(createArmy(unitdata.Bomber, 8, []));
enemyTwo.addShips(createArmy(unitdata.Fregatte, 5, []));
enemyTwo.addShips(createArmy(unitdata.GrosserTransporter, 10, []));
enemyTwo.addShips(createArmy(unitdata.Zerstörer, 3, []));
enemyTwo.addShips(createArmy(unitdata.Kreuzer, 0, []));
enemyTwo.addShips(createArmy(unitdata.FlugDeckKreuzer, 0, []));
enemyTwo.addShips(createArmy(unitdata.TraegerSchiff, 0, []));
enemyTwo.addShips(createArmy(unitdata.SchlachtKreuzer, 0, []));
enemyTwo.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));

let enemyThree = new Fleet([]);
enemyThree.addShips(createArmy(unitdata.LeichterJaeger, 100, []));
enemyThree.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
enemyThree.addShips(createArmy(unitdata.SchwererJaeger, 50, []));
enemyThree.addShips(createArmy(unitdata.Bomber, 8, []));[]
enemyThree.addShips(createArmy(unitdata.Fregatte, 6, []));
enemyThree.addShips(createArmy(unitdata.GrosserTransporter, 10, []));
enemyThree.addShips(createArmy(unitdata.Zerstörer, 3, []));
enemyThree.addShips(createArmy(unitdata.Kreuzer, 0, []));
enemyThree.addShips(createArmy(unitdata.FlugDeckKreuzer, 5, []));
enemyThree.addShips(createArmy(unitdata.TraegerSchiff, 0, []));
enemyThree.addShips(createArmy(unitdata.SchlachtKreuzer, 0, []));
enemyThree.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));

let enemyFour = new Fleet([]);
enemyFour.addShips(createArmy(unitdata.LeichterJaeger, 100, []));
enemyFour.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
enemyFour.addShips(createArmy(unitdata.SchwererJaeger, 100, []));
enemyFour.addShips(createArmy(unitdata.Bomber, 20, []));
enemyFour.addShips(createArmy(unitdata.Fregatte, 10, []));
enemyFour.addShips(createArmy(unitdata.GrosserTransporter, 10, []));
enemyFour.addShips(createArmy(unitdata.Zerstörer, 1, []));
enemyFour.addShips(createArmy(unitdata.Kreuzer, 0, []));
enemyFour.addShips(createArmy(unitdata.FlugDeckKreuzer, 5, []));
enemyFour.addShips(createArmy(unitdata.TraegerSchiff, 0, []));
enemyFour.addShips(createArmy(unitdata.SchlachtKreuzer, 0, []));
enemyFour.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));

let enemyFive = new Fleet([]);
enemyFive.addShips(createArmy(unitdata.LeichterJaeger, 100, []));
enemyFive.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
enemyFive.addShips(createArmy(unitdata.SchwererJaeger, 100, []));
enemyFive.addShips(createArmy(unitdata.Bomber, 15, []));
enemyFive.addShips(createArmy(unitdata.Fregatte, 15, []));
enemyFive.addShips(createArmy(unitdata.GrosserTransporter, 15, []));
enemyFive.addShips(createArmy(unitdata.Zerstörer, 3, []));
enemyFive.addShips(createArmy(unitdata.Kreuzer, 0, []));
enemyFive.addShips(createArmy(unitdata.FlugDeckKreuzer, 5, []));
enemyFive.addShips(createArmy(unitdata.TraegerSchiff, 1, []));
enemyFive.addShips(createArmy(unitdata.SchlachtKreuzer, 0, []));
enemyFive.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));

let enemySix = new Fleet([]);
enemySix.addShips(createArmy(unitdata.LeichterJaeger, 100, []));
enemySix.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
enemySix.addShips(createArmy(unitdata.SchwererJaeger, 50, []));
enemySix.addShips(createArmy(unitdata.Bomber, 10, []));
enemySix.addShips(createArmy(unitdata.Fregatte, 10, []));
enemySix.addShips(createArmy(unitdata.GrosserTransporter, 20, []));
enemySix.addShips(createArmy(unitdata.Zerstörer, 5, []));
enemySix.addShips(createArmy(unitdata.Kreuzer, 3, []));
enemySix.addShips(createArmy(unitdata.FlugDeckKreuzer, 5, []));
enemySix.addShips(createArmy(unitdata.TraegerSchiff, 2, []));
enemySix.addShips(createArmy(unitdata.SchlachtKreuzer, 0, []));
enemySix.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));

let enemySeven = new Fleet([]);
enemySeven.addShips(createArmy(unitdata.LeichterJaeger, 50, []));
enemySeven.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
enemySeven.addShips(createArmy(unitdata.SchwererJaeger, 30, []));
enemySeven.addShips(createArmy(unitdata.Bomber, 5, []));
enemySeven.addShips(createArmy(unitdata.Fregatte, 10, []));
enemySeven.addShips(createArmy(unitdata.GrosserTransporter, 30, []));
enemySeven.addShips(createArmy(unitdata.Zerstörer, 7, []));
enemySeven.addShips(createArmy(unitdata.Kreuzer, 5, []));
enemySeven.addShips(createArmy(unitdata.FlugDeckKreuzer, 5, []));
enemySeven.addShips(createArmy(unitdata.TraegerSchiff, 1, []));
enemySeven.addShips(createArmy(unitdata.SchlachtKreuzer, 1, []));
enemySeven.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));

let enemyEight = new Fleet([]);
enemyEight.addShips(createArmy(unitdata.LeichterJaeger, 100, []));
enemyEight.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
enemyEight.addShips(createArmy(unitdata.SchwererJaeger, 50, [])); // angepasst von 30 auf 50
enemyEight.addShips(createArmy(unitdata.Bomber, 10, [])); // angepasst von 5 auf 10
enemyEight.addShips(createArmy(unitdata.Fregatte, 5, [])); // angepasst von 10 auf 5
enemyEight.addShips(createArmy(unitdata.GrosserTransporter, 50, [])); // angepasst von 30 auf 50
enemyEight.addShips(createArmy(unitdata.Zerstörer, 10, [])); // angepasst von 7 auf 10
enemyEight.addShips(createArmy(unitdata.Kreuzer, 10, [])); // angepasst von 5 auf 10
enemyEight.addShips(createArmy(unitdata.FlugDeckKreuzer, 5, []));
enemyEight.addShips(createArmy(unitdata.TraegerSchiff, 1, []));
enemyEight.addShips(createArmy(unitdata.SchlachtKreuzer, 1, []));
enemyEight.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));

let enemyNine = new Fleet([]);
enemyNine.addShips(createArmy(unitdata.LeichterJaeger, 100, [])); // angepasst von 50 auf 100
enemyNine.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
enemyNine.addShips(createArmy(unitdata.SchwererJaeger, 50, [])); // angepasst von 30 auf 50
enemyNine.addShips(createArmy(unitdata.Bomber, 15, [])); // angepasst von 5 auf 15
enemyNine.addShips(createArmy(unitdata.Fregatte, 10, []));
enemyNine.addShips(createArmy(unitdata.GrosserTransporter, 50, [])); // angepasst von 30 auf 50
enemyNine.addShips(createArmy(unitdata.Zerstörer, 10, [])); // angepasst von 7 auf 10
enemyNine.addShips(createArmy(unitdata.Kreuzer, 10, [])); // angepasst von 5 auf 10
enemyNine.addShips(createArmy(unitdata.FlugDeckKreuzer, 5, []));
enemyNine.addShips(createArmy(unitdata.TraegerSchiff, 1, []));
enemyNine.addShips(createArmy(unitdata.SchlachtKreuzer, 1, []));
enemyNine.addShips(createArmy(unitdata.SchlachtSchiff, 0, []));

let enemyTen = new Fleet([]);
enemyTen.addShips(createArmy(unitdata.LeichterJaeger, 200, [])); // angepasst von 50 auf 200
enemyTen.addShips(createArmy(unitdata.KleinerTransporter, 10, []));
enemyTen.addShips(createArmy(unitdata.SchwererJaeger, 50, [])); // angepasst von 30 auf 50
enemyTen.addShips(createArmy(unitdata.Bomber, 10, [])); // angepasst von 5 auf 10
enemyTen.addShips(createArmy(unitdata.Fregatte, 10, []));
enemyTen.addShips(createArmy(unitdata.GrosserTransporter, 10, [])); // angepasst von 30 auf 10
enemyTen.addShips(createArmy(unitdata.Zerstörer, 10, [])); // angepasst von 7 auf 10
enemyTen.addShips(createArmy(unitdata.Kreuzer, 5, []));
enemyTen.addShips(createArmy(unitdata.FlugDeckKreuzer, 5, []));
enemyTen.addShips(createArmy(unitdata.TraegerSchiff, 1, []));
enemyTen.addShips(createArmy(unitdata.SchlachtKreuzer, 0, [])); // angepasst von 1 auf 0
enemyTen.addShips(createArmy(unitdata.SchlachtSchiff, 1, []));

function calculateFirePower(teamName, array) {
  let firePower = 0;
  for (const unit of array) {
    firePower += unit.firepower || 0;
  }
  console.log(`${teamName} Firepower: ${firePower}`);
}
/*
calculateFirePower("Team 1", sturmFlotte);
calculateFirePower("Team 2", titanenBund);
calculateFirePower("Gegner 1", gegnerEins);
calculateFirePower("Gegner 2", gegnerZwei);
calculateFirePower("Gegner 3", gegnerDrei);
calculateFirePower("Gegner 4", gegnerVier);
calculateFirePower("Gegner 5", gegnerFuenf);
calculateFirePower("Gegner 6", gegnerSechs);
calculateFirePower("Gegner 7", gegnerSieben);
calculateFirePower("Gegner 8", gegnerAcht);
calculateFirePower("Gegner 9", gegnerNeun);
calculateFirePower("Gegner 10", gegnerZehn);
console.log(sturmFlotte.length);
console.log(titanenBund.length);
console.log(gegnerEins.length);
console.log(gegnerZwei.length);
console.log(gegnerDrei.length);
console.log(gegnerVier.length);
console.log(gegnerFuenf.length);
console.log(gegnerSechs.length);
console.log(gegnerSieben.length);
console.log(gegnerAcht.length);
console.log(gegnerNeun.length);
console.log(gegnerZehn.length);
*/
const planets = [
  enemyOne, enemyTwo, enemyThree, enemyFour, enemyFive, enemySix, enemySeven, enemyEight, enemyNine, enemyTen
]
export default {
  sturmFlotte,
  titanenBund,
  enemyOne,
  enemyTwo,
  enemyThree,
  enemyFour,
  enemyFive,
  enemySix,
  enemySeven,
  enemyEight,
  enemyNine,
  enemyTen,
  planets
};
