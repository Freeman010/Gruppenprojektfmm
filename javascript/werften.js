// Ändern der Title-Box innerhalb der Content Box bei Buttonclick (Vgl. forschung.js)

const buttonKlein = document.getElementById("change-klein");
const buttonMittel = document.getElementById("change-mittel");
const buttonGross = document.getElementById("change-gross");
const div = document.getElementById("btn-content");

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
    '<button class="btn btn1">Kleiner Transporter</button>\n<button class="btn btn2">Leichter Jäger</button>\n<button class="btn btn3">Schwerer Jäger</button>\n<button class="btn btn4">Bomber</button>\n<button class="btn btn5">Fregatte</button>\n<button class="btn btn6">Mining Drone</button>\n<button class="btn btn7">Flaggeschütz</button>\n<button class="btn btn8">Lasergeschütz</button>',
  mittel:
    '<button class="btn btn1">Großer Transporter</button>\n<button class="btn btn2">Zerstörer</button>\n<button class="btn btn3">Kreuzer</button>\n<button class="btn btn4">Flugdeckkreuzer</button>\n<button class="btn btn5">Kolonieschiff</button>\n<button class="btn btn6">Bergbauschiff</button>\n<button class="btn btn7">Ionenkanone</button>\n<button class="btn btn8">Railgun</button>',
  gross:
    '<button class="btn btn9">Schlachtschiff</button>\n<button class="btn btn10">Trägerschiff</button>\n<button class="btn btn11">Schlachtkreuzer</button>\n<button class="btn btn12">Partikelgeschütz</button>',
};

function changeContent(werftTyp) {
  div.innerHTML = werftTypen[werftTyp];
}

buttonKlein.addEventListener("click", () => changeContent("klein"));
buttonMittel.addEventListener("click", () => changeContent("mittel"));
buttonGross.addEventListener("click", () => changeContent("gross"));
