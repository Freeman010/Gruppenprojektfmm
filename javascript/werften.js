// Ändern der Title-Box innerhalb der Content Box bei Buttonclick (Vgl. forschung.js)

const buttonKlein = document.getElementById("change-klein");
const buttonMittel = document.getElementById("change-mittel");
const buttonGross = document.getElementById("change-gross");
const btnContent = document.getElementById("btn-content");

/* const kleineWerft =
  '<button class="btn btn1">Kleiner Transporter</button>\n<button class="btn btn2">Leichter Jäger</button>\n<button class="btn btn3">Schwerer Jäger</button>\n<button class="btn btn4">Bomber</button>\n<button class="btn btn5">Fregatte</button>\n<button class="btn btn6">Mining Drone</button>\n<button class="btn btn7">Flaggeschütz</button>\n<button class="btn btn8">Lasergeschütz</button>';
const mittlereWerft =
  '<button class="btn btn1">Großer Transporter</button>\n<button class="btn btn2">Zerstörer</button>\n<button class="btn btn3">Kreuzer</button>\n<button class="btn btn4">Flugdeckkreuzer</button>\n<button class="btn btn5">Kolonieschiff</button>\n<button class="btn btn6">Bergbauschiff</button>\n<button class="btn btn7">Ionenkanone</button>\n<button class="btn btn8">Railgun</button>';
const grosseWerft =
  '<button class="btn btn9">Schlachtschiff</button>\n<button class="btn btn10">Trägerschiff</button>\n<button class="btn btn11">Schlachtkreuzer</button>\n<button class="btn btn12">Partikelgeschütz</button>';
 */
/* function changeContentMittel() {
  div.innerHTML = mittlereWerft;
}
buttonMittel.addEventListener("click", changeContentMittel);

function changeContentKlein() {
  div.innerHTML = kleineWerft;
}
buttonKlein.addEventListener("click", changeContentKlein);

function changeContentGross() {
  div.innerHTML = grosseWerft;
}
buttonGross.addEventListener("click", changeContentGross);
 */

//angepasster Code: die verschiedenen Werften werden in einem Objekt gespeichert
// daraufhin wird eine allgemeine Funktion erstellt,  die den Werfttyp als Argument erhält
// und dementsprechend den content der div ändert.
// die event-listener verwenden pfeilfunktionen um  die funktion "changeContent" aufzurufen
// und dabei den richtigen WerftTypen zu übergeben

const werftTypen = {
  klein:
    '<button id="kleinerTransporter" class="btn btn1">Kleiner Transporter</button>\n<button id="leichterJaeger" class="btn btn2">Leichter Jäger</button>\n<button id="schwererJaeger" class="btn btn3">Schwerer Jäger</button>\n<button id="bomber" class="btn btn4">Bomber</button>\n<button id="fregatte" class="btn btn5">Fregatte</button>\n<button id="miningDrone" class="btn btn6">Mining Drone</button>\n<button id="flaggeschuetz" class="btn btn7">Flaggeschütz</button>\n<button id="lasergeschuetz" class="btn btn8">Lasergeschütz</button>',
  mittel:
    '<button id="grosserTransporter" class="btn btn1">Großer Transporter</button>\n<button id="zerstoerer" class="btn btn2">Zerstörer</button>\n<button id="kreuzer" class="btn btn3">Kreuzer</button>\n<button id="flugdeckkreuzer" class="btn btn4">Flugdeckkreuzer</button>\n<button id="kolonieschiff" class="btn btn5">Kolonieschiff</button>\n<button id="bergbauschiff" class="btn btn6">Bergbauschiff</button>\n<button id="ionenkanone" class="btn btn7">Ionenkanone</button>\n<button id="railgun" class="btn btn8">Railgun</button>',
  gross:
    '<button id="schlachtschiff" class="btn btn9">Schlachtschiff</button>\n<button id="traegerschiff" class="btn btn10">Trägerschiff</button>\n<button id="schlachtkreuzer" class="btn btn11">Schlachtkreuzer</button>\n<button id="partikelgeschuetz" class="btn btn12">Partikelgeschütz</button>',
};

function changeContent(werftTyp) {
  btnContent.innerHTML = werftTypen[werftTyp];
}

buttonKlein.addEventListener("click", () => changeContent("klein"));
buttonMittel.addEventListener("click", () => changeContent("mittel"));
buttonGross.addEventListener("click", () => changeContent("gross"));

// Ändern des Übersichtsbilds bei button-click

// Festlegung der Bildvariablen

const imgPaths = {
  kltransporter:
    "../img/img/werften/kleine_werft/kleiner_transporter/kleiner_transporter1.png",
  ljaeger: "../img/img/werften/kleine_werft/leichter_jäger/leichter_jäger1.png",
  sjaeger: "../img/img/werften/kleine_werft/schwerer_jäger/schwerer_jäger1.png",
  bomber: "../img/img/werften/kleine_werft/bomber/bomber_1.png",
  fregatte: "../img/img/werften/kleine_werft/fregatte/fregatte_1.png",
  miningdrone: "../img/img/werften/kleine_werft/mining_drone/mining_drone1.png",
  flaggeschuetz:
    "../img/img/werften/kleine_werft/flaggeschütz/flaggeschütz1.png",
  lasergeschuetz:
    "../img/img/werften/kleine_werft/lasergeschütz/lasergeschütz1.jpg",
  grtransporter:
    "../img/img/werften/mittlere_werft/großer_transporter/großer_transporter1.png",
  zerstoerer: "../img/img/werften/mittlere_werft/zerstörer/zerstörer_1.png",
  kreuzer: "../img/img/werften/mittlere_werft/kreuzer/kreuzer_1.png",
  flugdeckkreuzer:
    "../img/img/werften/mittlere_werft/flugdeckkreuzer/flugdeckkreuzer_1.png",
  kolonieschiff:
    "../img/img/werften/mittlere_werft/kolonieschiff/kolonieschiff_1.png",
  bergbauschiff:
    "../img/img/werften/mittlere_werft/bergbauschiff/bergbauschiff_1.png",
  ionenkanone: "../img/img/werften/mittlere_werft/ionenkanone/ionenkanone1.jpg",
  railgun: "../img/img/werften/mittlere_werft/railgun/railgun_1.png",
  schlachtschiff:
    "../img/img/werften/große_werft/schlachtschiff/schlachtschiff_1.png",
  traegerschiff:
    "../img/img/werften/große_werft/trägerschiff/trägerschiff_1.png",
  schlachtkreuzer:
    "../img/img/werften/große_werft/schlachtkreuzer/schlachtkreuzer_1.png",
  partikelgeschuetz:
    "../img/img/werften/große_werft/partikelgeschütz/partikelgeschütz1.jpg",
};

// Für jede ID in werftTypen.klein
const kleinerTransporter = document.getElementById("kleinerTransporter");
const leichterJaeger = document.getElementById("leichterJaeger");
const schwererJaeger = document.getElementById("schwererJaeger");
const bomber = document.getElementById("bomber");
const fregatte = document.getElementById("fregatte");
const miningDrone = document.getElementById("miningDrone");
const flaggeschuetz = document.getElementById("flaggeschuetz");
const lasergeschuetz = document.getElementById("lasergeschuetz");

// Für jede ID in werftTypen.mittel
const grosserTransporter = document.getElementById("grosserTransporter");
const zerstoerer = document.getElementById("zerstoerer");
const kreuzer = document.getElementById("kreuzer");
const flugdeckkreuzer = document.getElementById("flugdeckkreuzer");
const kolonieschiff = document.getElementById("kolonieschiff");
const bergbauschiff = document.getElementById("bergbauschiff");
const ionenkanone = document.getElementById("ionenkanone");
const railgun = document.getElementById("railgun");

// Für jede ID in werftTypen.gross
const schlachtschiff = document.getElementById("schlachtschiff");
const traegerschiff = document.getElementById("traegerschiff");
const schlachtkreuzer = document.getElementById("schlachtkreuzer");
const partikelgeschuetz = document.getElementById("partikelgeschuetz");

const werftenTitle = document.getElementById("werften-title");

// Funktion zum Ändern des Bildes im div werften-title

function changeImageWerften(bild) {
  werftenTitle.style.backgroundImage = 'url("' + imgPaths[bild] + '")';
  console.log("hey");
}

kleinerTransporter.addEventListener("click", () =>
  changeImageWerften("kltransporter")
);
