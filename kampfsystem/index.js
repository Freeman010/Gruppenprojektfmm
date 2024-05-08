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
