export default class Unit {

    static name;
    static steelcosts;
    static chemicalcost;
    static energycosts;
    static firepower;
    static hull;
    static shield;
    static speed;
    static fuelconsume;
    static ammoconsume;
    static hangaring // if negative the unit use hangarslots, if positive unit have hangarslots
    static cargo;
    static unittype;

    static unittype = {
        leichterjäger: 1,
        schwererjäger: 2,
        bomber: 3,
        fregatte: 4,
        kleinertransporter: 5,
        miningdrohne: 6,

        großertransporter: 7,
        zerstörer: 8,
        kreuzer: 9,
        flugdeckkreuzer: 0,
        kolonieschiff: 11,
        bergbauschiff: 12,

        schlachtschiff: 13,
        schlachtkreuzer: 14,
        trägerschiff: 15,

        flakgeschütz: 16,
        artillerie: 17,
        ionenkanone: 18,
        lasergeschütz: 19,
        railgun: 20,
        partikelkanone: 21,
        planetarerschildgenerator: 22
    }

    angriff(gegner) {
        let isDead;
        let verbleibenderSchild = gegner.shield - this.firepower;
        console.log(`${this.name} greift ${gegner.name} an und fügt ${this.firepower} Schaden zu.`)
        if (verbleibenderSchild < 0) {
            gegner.hull += verbleibenderSchild;
            gegner.shield = 0;
        }
        if (gegner.hull < 0) {
            gegner.hull = 0;
            isDead = true;
            console.log(`${gegner.name} wurde vernichtet!`);
        } else {
            isDead = false;
            console.log(`${gegner.name} hat noch ${gegner.hull} Hüllenpunkte und ${gegner.shield} Schildpunkte übrig.`)
        }
        return isDead;


    }


    get(propertyName) {
        return this[propertyName];
    }

    set(propertyName, value) {
        this[propertyName] = value;
    }

    getsteelcost() {
        return this.steelcosts;
    }
    setsteelcost(value) {
        this.steelcosts = value;
    }
    getchemicalcosts() {
        return this.chemicalcost;
    }
    setchemicalcosts(value) {
        this.chemicalcost = value;
    }
    getenergycosts() {
        return this.energycosts;
    }
    setenergycosts(value) {
        this.energycosts = value;
    }
    getfirepower() {
        return this.firepower;
    }
    setfirepower(value) {
        this.firepower = value;
    }
    gethull() {
        return this.hull;
    }
    sethull(value) {
        this.hull = value;
    }
    getcshield() {
        return this.shield;
    }
    setshield(value) {
        this.shield = value;
    }
    getfuelconsume() {
        return this.fuelconsume;
    }
    setfuelconsume(value) {
        this.fuelconsume = value;
    }
    getammoconsume() {
        return this.ammoconsume;
    }
    setamoconsume(value) {
        this.ammoconsume = value;
    }
    gethangar() {
        return this.hangaring;
    }
    sethangar(value) {
        this.hangaring = value;
    }
    getcargo() {
        return this.cargo;
    }
    setcargo(value) {
        this.cargo = value;
    }
    getunittype() {
        return this.unittype;
    }
    setcunittype(value) {
        this.unittype = value;
    }
}
/*
  static chemicalcost;
  static energycosts;
  static firepower;
  static hull;
  static shield;
  static speed;
  static fuelconsume;
  static ammoconsume;
  static hangaring // if negative the unit use hangarslots, if positive unit have hangarslots
  static cargo;
  static unittype;
*/




