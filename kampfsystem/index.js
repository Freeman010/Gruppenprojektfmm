/*
1. Erstellen von vorgefertigten Flotten, die der Spieler sich auswählen kann
2. Zwei Anfangsflotten aus denen gewählt werden kann */

/*  Kleine Werft:   Kleiner Transporter, Leichter Jäger, Schwerer Jäger, Bomber, Fregatte
    Mittlere Werft: Großer Transporter, Zerstörer, Kreuzer, Flugdeckkreuzer



class Fleet {
    fleetArray;
    cargo;
    constructor(fleet, cargo) {
        this.cargo = cargo;
        this.fleetArray = fleet;
    }
}
class Fleet {
    constructor(ships) {

    }
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
}