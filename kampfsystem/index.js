import unitdata from "./unitdata.js";

class Fleet {
  constructor(ships) {
    this.fleetArray = ships;
    this.setMaxCargo(ships);
  }
  fleetArray;
  maxCargo = 0;
  actualCargo = 0;
  ressources = 0;
  ammo = 0;
  setMaxCargo(fleet) {
    if (Array.isArray(fleet)) {
      this.maxCargo = fleet.reduce((accumulator, unit) => {
        return accumulator + unit.cargo;
      }, 0);
    }
  }
  setAmmo(ammo) {
    if (this.actualCargo + ammo <= this.maxCargo) {
      this.actualCargo += ammo;
      ammo += ammo;
    } else {
      console.log("du hast nicht genug frachtraum");
    }
  }
}
/*
1. Erstellen von vorgefertigten Flotten, die der Spieler sich auswählen kann
2. Zwei Anfangsflotten aus denen gewählt werden kann */

/*  Kleine Werft:   Kleiner Transporter, Leichter Jäger, Schwerer Jäger, Bomber, Fregatte
    Mittlere Werft: Großer Transporter, Zerstörer, Kreuzer, FlugDeckKreuzer

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

const sturmFlotte = [
  ...Array(20).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(10).fill(unitdata.SchwererJaeger),
  ...Array(5).fill(unitdata.Bomber),
  ...Array(0).fill(unitdata.Fregatte),
  ...Array(0).fill(unitdata.GrosserTransporter),
  ...Array(2).fill(unitdata.Zerstörer),
  ...Array(0).fill(unitdata.Kreuzer),
  ...Array(1).fill(unitdata.FlugDeckKreuzer),
  ...Array(0).fill(unitdata.TrägerSchiff),
  ...Array(0).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

const titanenBund = [
  ...Array(10).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(8).fill(unitdata.SchwererJaeger),
  ...Array(0).fill(unitdata.Bomber),
  ...Array(8).fill(unitdata.Fregatte),
  ...Array(0).fill(unitdata.GrosserTransporter),
  ...Array(2).fill(unitdata.Zerstörer),
  ...Array(0).fill(unitdata.Kreuzer),
  ...Array(1).fill(unitdata.FlugDeckKreuzer),
  ...Array(0).fill(unitdata.TrägerSchiff),
  ...Array(0).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

let gegnerEins = [
  ...Array(100).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(50).fill(unitdata.SchwererJaeger),
  ...Array(5).fill(unitdata.Bomber),
  ...Array(3).fill(unitdata.Fregatte),
  ...Array(10).fill(unitdata.GrosserTransporter),
  ...Array(0).fill(unitdata.Zerstörer),
  ...Array(0).fill(unitdata.Kreuzer),
  ...Array(0).fill(unitdata.FlugDeckKreuzer),
  ...Array(0).fill(unitdata.TrägerSchiff),
  ...Array(0).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

let gegnerZwei = [
  ...Array(100).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(50).fill(unitdata.SchwererJaeger),
  ...Array(8).fill(unitdata.Bomber),
  ...Array(5).fill(unitdata.Fregatte),
  ...Array(0).fill(unitdata.GrosserTransporter),
  ...Array(3).fill(unitdata.Zerstörer),
  ...Array(0).fill(unitdata.Kreuzer),
  ...Array(0).fill(unitdata.FlugDeckKreuzer),
  ...Array(0).fill(unitdata.TrägerSchiff),
  ...Array(0).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

let gegnerDrei = [
  ...Array(100).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(50).fill(unitdata.SchwererJaeger),
  ...Array(5).fill(unitdata.Bomber),
  ...Array(3).fill(unitdata.Fregatte),
  ...Array(5).fill(unitdata.Zerstörer),
  ...Array(0).fill(unitdata.Kreuzer),
  ...Array(5).fill(unitdata.FlugDeckKreuzer),
  ...Array(5).fill(unitdata.GrosserTransporter),
  ...Array(0).fill(unitdata.TrägerSchiff),
  ...Array(0).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

let gegnerVier = [
  ...Array(100).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(100).fill(unitdata.SchwererJaeger),
  ...Array(20).fill(unitdata.Bomber),
  ...Array(10).fill(unitdata.Fregatte),
  ...Array(10).fill(unitdata.GrosserTransporter),
  ...Array(1).fill(unitdata.Zerstörer),
  ...Array(0).fill(unitdata.Kreuzer),
  ...Array(5).fill(unitdata.FlugDeckKreuzer),
  ...Array(0).fill(unitdata.TrägerSchiff),
  ...Array(0).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

let gegnerFuenf = [
  ...Array(100).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(100).fill(unitdata.SchwererJaeger),
  ...Array(15).fill(unitdata.Bomber),
  ...Array(15).fill(unitdata.Fregatte),
  ...Array(15).fill(unitdata.GrosserTransporter),
  ...Array(3).fill(unitdata.Zerstörer),
  ...Array(0).fill(unitdata.Kreuzer),
  ...Array(5).fill(unitdata.FlugDeckKreuzer),
  ...Array(1).fill(unitdata.TrägerSchiff),
  ...Array(0).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

let gegnerSechs = [
  ...Array(100).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(50).fill(unitdata.SchwererJaeger),
  ...Array(10).fill(unitdata.Bomber),
  ...Array(10).fill(unitdata.Fregatte),
  ...Array(20).fill(unitdata.GrosserTransporter),
  ...Array(5).fill(unitdata.Zerstörer),
  ...Array(3).fill(unitdata.Kreuzer),
  ...Array(5).fill(unitdata.FlugDeckKreuzer),
  ...Array(2).fill(unitdata.TrägerSchiff),
  ...Array(0).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

let gegnerSieben = [
  ...Array(50).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(30).fill(unitdata.SchwererJaeger),
  ...Array(5).fill(unitdata.Bomber),
  ...Array(10).fill(unitdata.Fregatte),
  ...Array(30).fill(unitdata.GrosserTransporter),
  ...Array(7).fill(unitdata.Zerstörer),
  ...Array(5).fill(unitdata.Kreuzer),
  ...Array(5).fill(unitdata.FlugDeckKreuzer),
  ...Array(1).fill(unitdata.TrägerSchiff),
  ...Array(1).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

let gegnerAcht = [
  ...Array(100).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(50).fill(unitdata.SchwererJaeger),
  ...Array(10).fill(unitdata.Bomber),
  ...Array(5).fill(unitdata.Fregatte),
  ...Array(50).fill(unitdata.GrosserTransporter),
  ...Array(10).fill(unitdata.Zerstörer),
  ...Array(10).fill(unitdata.Kreuzer),
  ...Array(5).fill(unitdata.FlugDeckKreuzer),
  ...Array(1).fill(unitdata.TrägerSchiff),
  ...Array(1).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

let gegnerNeun = [
  ...Array(100).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(50).fill(unitdata.SchwererJaeger),
  ...Array(15).fill(unitdata.Bomber),
  ...Array(10).fill(unitdata.Fregatte),
  ...Array(50).fill(unitdata.GrosserTransporter),
  ...Array(10).fill(unitdata.Zerstörer),
  ...Array(10).fill(unitdata.Kreuzer),
  ...Array(5).fill(unitdata.FlugDeckKreuzer),
  ...Array(1).fill(unitdata.TrägerSchiff),
  ...Array(1).fill(unitdata.SchlachtKreuzer),
  ...Array(0).fill(unitdata.SchlachtSchiff),
];

let gegnerZehn = [
  ...Array(200).fill(unitdata.LeichterJaeger),
  ...Array(10).fill(unitdata.KleinerTransporter),
  ...Array(50).fill(unitdata.SchwererJaeger),
  ...Array(10).fill(unitdata.Bomber),
  ...Array(10).fill(unitdata.Fregatte),
  ...Array(10).fill(unitdata.GrosserTransporter),
  ...Array(10).fill(unitdata.Zerstörer),
  ...Array(5).fill(unitdata.Kreuzer),
  ...Array(5).fill(unitdata.FlugDeckKreuzer),
  ...Array(1).fill(unitdata.TrägerSchiff),
  ...Array(0).fill(unitdata.SchlachtKreuzer),
  ...Array(1).fill(unitdata.SchlachtSchiff),
];

function calculateFirePower(teamName, array) {
  let firePower = 0;
  for (const unit of array) {
    const unitInstance = new unit();
    firePower += unitInstance.firepower || 0;
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
