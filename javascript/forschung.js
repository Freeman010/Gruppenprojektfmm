//Idee: Auf eine der kleinen Bilderboxen klicken, um den Inhalt der Gesamtbox zu ändern (großes Bild anzeigen lassen) //

//Variablen//

const bergbauDescription =
  "Im Bergbau-Modul erschließe die unendlichen Ressourcen des Weltraums. Baue auf Planeten ab, um Rohstoffe zu gewinnen und deine Flotte zu stärken. Nutze die Schätze des Universums für deine Expansion, Dominanz und den Aufbau einer mächtigen Zivilisation.\
";
const funkDescription =
  "Durch die Erforschung fortschrittlicher Funktechnik bleibst du stets verbunden. Sende und empfange Nachrichten in Echtzeit, koordiniere deine Flottenbewegungen und spüre feindliche Aktivitäten auf. Kommunikation ist der Schlüssel zur Überlegenheit im unendlichen Kosmos.";
const panzerungDescription =
  "Mit unserer hochentwickelten Panzerungstechnologie bist du in den Tiefen des Weltraums geschützt. Rüste deine Schiffe mit robusten Panzerungen aus, um feindliche Angriffe abzuwehren und deine Flotte zu verteidigen. Überleben ist der Schlüssel zur Herrschaft im Universum.\
";
const ballistikDescription =
  "Durch die Erforschung der Ballistik erlangst du eine unübertroffene Feuerkraft. Entwickle Waffen mit tödlicher Präzision, um deine Feinde im Weltraum zu vernichten. Die Kontrolle über das Schlachtfeld gehört denen, die die Macht der Ballistik beherrschen.";
const energiewaffenDescription =
  "Durch die Erforschung von Energiewaffen erlangst du eine überlegene Feuerkraft. Entwickle Technologien, um die Energie des Universums zu kanalisieren und vernichte deine Feinde mit zerstörerischer Kraft. Die Zukunft des Kampfes liegt in der Beherrschung von Energiewaffen.\
";
const schildtechnikDescription =
  "Mit der Erforschung von Schildtechnik schützt du deine Flotte vor tödlichen Angriffen. Entwickle fortschrittliche Schilde, um deine Schiffe zu verteidigen und ihre Überlebensfähigkeit im Weltraum zu erhöhen. Die Sicherheit deiner Flotte ist entscheidend für deine Dominanz im Universum.";
const sprungantriebDescription =
  "Durch die Erforschung von Sprungantrieben eröffnest du neue Horizonte im Universum. Entwickle Technologien für Warp- und Hyperraum-Sprünge, um die Weiten des Weltraums zu durchqueren und neue Gebiete zu erschließen. Die Fähigkeit zu schnellen Reisen ist der Schlüssel zur Expansion und Eroberung.";
const verbrennungstriebwerkeDescription =
  "Mit der Erforschung von Verbrennungstriebwerken katapultierst du deine Flotte in die Weiten des Weltraums. Entwickle leistungsfähige Antriebe, um deine Schiffe zu beschleunigen und ferne Welten zu erreichen. Die Geschwindigkeit ist der Schlüssel zur Eroberung des unendlichen Kosmos. ";

const bergbauTitle = "Bergbau Stufe X";
const funkTitle = "Funktechnik Stufe X";
const panzerungTitle = "Panzerung Stufe X";
const ballistikTitle = "Ballistik Stufe X";
const energiewaffenTitle = "Energiewaffen Stufe X";
const schildtechnikTitle = "Schildtechnik Stufe X";
const sprungantriebTitle = "Sprungantrieb Stufe X";
const verbrennungTitle = "Verbrennungstriebwerke Stufe X";

//Funktion//

function changeImage(background, iteral) {
  let e = document.getElementById("r-header");
  e.style.backgroundImage = "url('" + background + "')";
  let descriptionElement = document.getElementById("description");
  let titleElement = document.getElementById("forschungs-title");
  if (iteral == "bergbau") {
    descriptionElement.innerText = bergbauDescription;
    titleElement.innerText = bergbauTitle;
  }
  if (iteral == "funk") {
    descriptionElement.innerText = funkDescription;
    titleElement.innerText = funkTitle;
  }
  if (iteral == "panzerung") {
    descriptionElement.innerText = panzerungDescription;
    titleElement.innerText = panzerungTitle;
  }
  if (iteral == "ballistik") {
    descriptionElement.innerText = ballistikDescription;
    titleElement.innerText = ballistikTitle;
  }
  if (iteral == "energiewaffen") {
    descriptionElement.innerText = energiewaffenDescription;
    titleElement.innerText = energiewaffenTitle;
  }
  if (iteral == "schildtechnik") {
    descriptionElement.innerText = schildtechnikDescription;
    titleElement.innerText = schildtechnikTitle;
  }
  if (iteral == "sprungantrieb") {
    descriptionElement.innerText = sprungantriebDescription;
    titleElement.innerText = sprungantriebTitle;
  }
  if (iteral == "verbrennung") {
    descriptionElement.innerText = verbrennungstriebwerkeDescription;
    titleElement.innerText = verbrennungTitle;
  }
}
