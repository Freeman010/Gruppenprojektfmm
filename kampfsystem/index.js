class Fleet {
    fleetArray;
    cargo;
    constructor(fleet, cargo) {
        this.cargo = cargo;
        this.fleetArray = fleet;
    }
}
class Cargo {
    constructor() {

    }
    maxCargo = 0;
    actualCargo = 0;
    ressources = 0;
    ammo = 0;
    setMaxCargo(fleet) {
        if (Array.isArray(fleet)) {
            const totalCargo = fleet.reduce((accumulator, unit) => {
                return accumulator + unit.cargo;
            }, 0);
        }
    }
}