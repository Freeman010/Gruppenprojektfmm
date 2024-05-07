import readline from "readline";

// Funktion zum Erstellen des Auswahlmenüs
function createMenu(options) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Bitte wählen Sie eine Option:");

  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  rl.question("Ihre Auswahl: ", (answer) => {
    const choice = parseInt(answer);
    if (isNaN(choice) || choice < 1 || choice > options.length) {
      console.log(
        "Ungültige Auswahl. Bitte geben Sie eine Nummer zwischen 1 und " +
          options.length +
          " ein."
      );
      rl.close();
      return;
    }
    console.log("Sie haben '" + options[choice - 1] + "' ausgewählt.");
    rl.close();
  });
}

// Beispielaufruf
createMenu(["Leichter Jäger", "Schwerer Jäger", "Bomber"]);