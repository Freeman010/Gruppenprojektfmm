
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
        }
        else {
            console.log("du hast nicht genug frachtraum");
        }
    }
}
/*
1. Erstellen von vorgefertigten Flotten, die der Spieler sich auswählen kann
2. Zwei Anfangsflotten aus denen gewählt werden kann */

/*  Kleine Werft:   Kleiner Transporter, Leichter Jäger, Schwerer Jäger, Bomber, Fregatte
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


