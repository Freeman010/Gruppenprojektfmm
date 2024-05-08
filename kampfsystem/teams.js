import Unit from "./unit.js";
import unitdata from "./unitdata.js";

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
    target.push(new shipType());
  }
  return target;
}

const sturmFlotte = [];

createArmy(unitdata.LeichterJaeger, 10, sturmFlotte);
createArmy(unitdata.KleinerTransporter, 10, sturmFlotte);
createArmy(unitdata.SchwererJaeger, 10, sturmFlotte);
createArmy(unitdata.Bomber, 5, sturmFlotte);
createArmy(unitdata.Fregatte, 0, sturmFlotte);
createArmy(unitdata.GrosserTransporter, 0, sturmFlotte);
createArmy(unitdata.Zerstörer, 2, sturmFlotte);
createArmy(unitdata.Kreuzer, 0, sturmFlotte);
createArmy(unitdata.FlugDeckKreuzer, 1, sturmFlotte);
createArmy(unitdata.TrägerSchiff, 0, sturmFlotte);
createArmy(unitdata.SchlachtKreuzer, 0, sturmFlotte);
createArmy(unitdata.SchlachtSchiff, 0, sturmFlotte);
console.log(sturmFlotte);

const titanenBund = [];
createArmy(unitdata.LeichterJaeger, 10, titanenBund);
createArmy(unitdata.KleinerTransporter, 10, titanenBund);
createArmy(unitdata.SchwererJaeger, 8, titanenBund);
createArmy(unitdata.Bomber, 0, titanenBund);
createArmy(unitdata.Fregatte, 8, titanenBund);
createArmy(unitdata.GrosserTransporter, 0, titanenBund);
createArmy(unitdata.Zerstörer, 2, titanenBund);
createArmy(unitdata.Kreuzer, 0, titanenBund);
createArmy(unitdata.FlugDeckKreuzer, 1, titanenBund);
createArmy(unitdata.TrägerSchiff, 0, titanenBund);
createArmy(unitdata.SchlachtKreuzer, 0, titanenBund);
createArmy(unitdata.SchlachtSchiff, 0, titanenBund);
console.log(titanenBund);

let gegnerEins = [];

createArmy(unitdata.LeichterJaeger, 100, gegnerEins);
createArmy(unitdata.KleinerTransporter, 10, gegnerEins);
createArmy(unitdata.SchwererJaeger, 50, gegnerEins);
createArmy(unitdata.Bomber, 5, gegnerEins);
createArmy(unitdata.Fregatte, 3, gegnerEins);
createArmy(unitdata.GrosserTransporter, 10, gegnerEins);
createArmy(unitdata.Zerstörer, 0, gegnerEins);
createArmy(unitdata.Kreuzer, 0, gegnerEins);
createArmy(unitdata.FlugDeckKreuzer, 0, gegnerEins);
createArmy(unitdata.TrägerSchiff, 0, gegnerEins);
createArmy(unitdata.SchlachtKreuzer, 0, gegnerEins);
createArmy(unitdata.SchlachtSchiff, 0, gegnerEins);

let gegnerZwei = [];

createArmy(unitdata.LeichterJaeger, 100, gegnerZwei);
createArmy(unitdata.KleinerTransporter, 10, gegnerZwei);
createArmy(unitdata.SchwererJaeger, 50, gegnerZwei);
createArmy(unitdata.Bomber, 8, gegnerZwei);
createArmy(unitdata.Fregatte, 5, gegnerZwei);
createArmy(unitdata.GrosserTransporter, 10, gegnerZwei);
createArmy(unitdata.Zerstörer, 3, gegnerZwei);
createArmy(unitdata.Kreuzer, 0, gegnerZwei);
createArmy(unitdata.FlugDeckKreuzer, 0, gegnerZwei);
createArmy(unitdata.TrägerSchiff, 0, gegnerZwei);
createArmy(unitdata.SchlachtKreuzer, 0, gegnerZwei);
createArmy(unitdata.SchlachtSchiff, 0, gegnerZwei);

let gegnerDrei = [];
createArmy(unitdata.LeichterJaeger, 100, gegnerDrei);
createArmy(unitdata.KleinerTransporter, 10, gegnerDrei);
createArmy(unitdata.SchwererJaeger, 50, gegnerDrei);
createArmy(unitdata.Bomber, 8, gegnerDrei);
createArmy(unitdata.Fregatte, 6, gegnerDrei);
createArmy(unitdata.GrosserTransporter, 10, gegnerDrei);
createArmy(unitdata.Zerstörer, 3, gegnerDrei);
createArmy(unitdata.Kreuzer, 0, gegnerDrei);
createArmy(unitdata.FlugDeckKreuzer, 5, gegnerDrei);
createArmy(unitdata.TrägerSchiff, 0, gegnerDrei);
createArmy(unitdata.SchlachtKreuzer, 0, gegnerDrei);
createArmy(unitdata.SchlachtSchiff, 0, gegnerDrei);

let gegnerVier = [];
createArmy(unitdata.LeichterJaeger, 100, gegnerVier);
createArmy(unitdata.KleinerTransporter, 10, gegnerVier);
createArmy(unitdata.SchwererJaeger, 100, gegnerVier);
createArmy(unitdata.Bomber, 20, gegnerVier);
createArmy(unitdata.Fregatte, 10, gegnerVier);
createArmy(unitdata.GrosserTransporter, 10, gegnerVier);
createArmy(unitdata.Zerstörer, 1, gegnerVier);
createArmy(unitdata.Kreuzer, 0, gegnerVier);
createArmy(unitdata.FlugDeckKreuzer, 5, gegnerVier);
createArmy(unitdata.TrägerSchiff, 0, gegnerVier);
createArmy(unitdata.SchlachtKreuzer, 0, gegnerVier);
createArmy(unitdata.SchlachtSchiff, 0, gegnerVier);

let gegnerFuenf = [];
createArmy(unitdata.LeichterJaeger, 100, gegnerFuenf);
createArmy(unitdata.KleinerTransporter, 10, gegnerFuenf);
createArmy(unitdata.SchwererJaeger, 100, gegnerFuenf);
createArmy(unitdata.Bomber, 15, gegnerFuenf);
createArmy(unitdata.Fregatte, 15, gegnerFuenf);
createArmy(unitdata.GrosserTransporter, 15, gegnerFuenf);
createArmy(unitdata.Zerstörer, 3, gegnerFuenf);
createArmy(unitdata.Kreuzer, 0, gegnerFuenf);
createArmy(unitdata.FlugDeckKreuzer, 5, gegnerFuenf);
createArmy(unitdata.TrägerSchiff, 1, gegnerFuenf);
createArmy(unitdata.SchlachtKreuzer, 0, gegnerFuenf);
createArmy(unitdata.SchlachtSchiff, 0, gegnerFuenf);

let gegnerSechs = [];
createArmy(unitdata.LeichterJaeger, 100, gegnerSechs);
createArmy(unitdata.KleinerTransporter, 10, gegnerSechs);
createArmy(unitdata.SchwererJaeger, 50, gegnerSechs);
createArmy(unitdata.Bomber, 10, gegnerSechs);
createArmy(unitdata.Fregatte, 10, gegnerSechs);
createArmy(unitdata.GrosserTransporter, 20, gegnerSechs);
createArmy(unitdata.Zerstörer, 5, gegnerSechs);
createArmy(unitdata.Kreuzer, 3, gegnerSechs);
createArmy(unitdata.FlugDeckKreuzer, 5, gegnerSechs);
createArmy(unitdata.TrägerSchiff, 2, gegnerSechs);
createArmy(unitdata.SchlachtKreuzer, 0, gegnerSechs);
createArmy(unitdata.SchlachtSchiff, 0, gegnerSechs);

let gegnerSieben = [];
createArmy(unitdata.LeichterJaeger, 50, gegnerSieben);
createArmy(unitdata.KleinerTransporter, 10, gegnerSieben);
createArmy(unitdata.SchwererJaeger, 30, gegnerSieben);
createArmy(unitdata.Bomber, 5, gegnerSieben);
createArmy(unitdata.Fregatte, 10, gegnerSieben);
createArmy(unitdata.GrosserTransporter, 30, gegnerSieben);
createArmy(unitdata.Zerstörer, 7, gegnerSieben);
createArmy(unitdata.Kreuzer, 5, gegnerSieben);
createArmy(unitdata.FlugDeckKreuzer, 5, gegnerSieben);
createArmy(unitdata.TrägerSchiff, 1, gegnerSieben);
createArmy(unitdata.SchlachtKreuzer, 1, gegnerSieben);
createArmy(unitdata.SchlachtSchiff, 0, gegnerSieben);

let gegnerAcht = [];
createArmy(unitdata.LeichterJaeger, 100, gegnerAcht);
createArmy(unitdata.KleinerTransporter, 10, gegnerAcht);
createArmy(unitdata.SchwererJaeger, 50, gegnerAcht); // angepasst von 30 auf 50
createArmy(unitdata.Bomber, 10, gegnerAcht); // angepasst von 5 auf 10
createArmy(unitdata.Fregatte, 5, gegnerAcht); // angepasst von 10 auf 5
createArmy(unitdata.GrosserTransporter, 50, gegnerAcht); // angepasst von 30 auf 50
createArmy(unitdata.Zerstörer, 10, gegnerAcht); // angepasst von 7 auf 10
createArmy(unitdata.Kreuzer, 10, gegnerAcht); // angepasst von 5 auf 10
createArmy(unitdata.FlugDeckKreuzer, 5, gegnerAcht);
createArmy(unitdata.TrägerSchiff, 1, gegnerAcht);
createArmy(unitdata.SchlachtKreuzer, 1, gegnerAcht);
createArmy(unitdata.SchlachtSchiff, 0, gegnerAcht);

let gegnerNeun = [];
createArmy(unitdata.LeichterJaeger, 100, gegnerNeun); // angepasst von 50 auf 100
createArmy(unitdata.KleinerTransporter, 10, gegnerNeun);
createArmy(unitdata.SchwererJaeger, 50, gegnerNeun); // angepasst von 30 auf 50
createArmy(unitdata.Bomber, 15, gegnerNeun); // angepasst von 5 auf 15
createArmy(unitdata.Fregatte, 10, gegnerNeun);
createArmy(unitdata.GrosserTransporter, 50, gegnerNeun); // angepasst von 30 auf 50
createArmy(unitdata.Zerstörer, 10, gegnerNeun); // angepasst von 7 auf 10
createArmy(unitdata.Kreuzer, 10, gegnerNeun); // angepasst von 5 auf 10
createArmy(unitdata.FlugDeckKreuzer, 5, gegnerNeun);
createArmy(unitdata.TrägerSchiff, 1, gegnerNeun);
createArmy(unitdata.SchlachtKreuzer, 1, gegnerNeun);
createArmy(unitdata.SchlachtSchiff, 0, gegnerNeun);

let gegnerZehn = [];
createArmy(unitdata.LeichterJaeger, 200, gegnerZehn); // angepasst von 50 auf 200
createArmy(unitdata.KleinerTransporter, 10, gegnerZehn);
createArmy(unitdata.SchwererJaeger, 50, gegnerZehn); // angepasst von 30 auf 50
createArmy(unitdata.Bomber, 10, gegnerZehn); // angepasst von 5 auf 10
createArmy(unitdata.Fregatte, 10, gegnerZehn);
createArmy(unitdata.GrosserTransporter, 10, gegnerZehn); // angepasst von 30 auf 10
createArmy(unitdata.Zerstörer, 10, gegnerZehn); // angepasst von 7 auf 10
createArmy(unitdata.Kreuzer, 5, gegnerZehn);
createArmy(unitdata.FlugDeckKreuzer, 5, gegnerZehn);
createArmy(unitdata.TrägerSchiff, 1, gegnerZehn);
createArmy(unitdata.SchlachtKreuzer, 0, gegnerZehn); // angepasst von 1 auf 0
createArmy(unitdata.SchlachtSchiff, 1, gegnerZehn);

function calculateFirePower(teamName, array) {
  let firePower = 0;
  for (const unit of array) {
    firePower += unit.firepower || 0;
  }
  console.log(`${teamName} Firepower: ${firePower}`);
}

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

export default {
  sturmFlotte,
  titanenBund,
  gegnerEins,
  gegnerZwei,
  gegnerDrei,
  gegnerVier,
  gegnerFuenf,
  gegnerSechs,
  gegnerSieben,
  gegnerAcht,
  gegnerNeun,
  gegnerZehn,
};
