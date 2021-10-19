const difficoltaSelezionata = document.getElementById("select-difficolta");
const btnPlay = document.getElementById("button-play");
const containerGriglia = document.getElementById("container-griglia");



btnPlay.addEventListener("click", function () {

    const difficolta = difficoltaSelezionata.value;
    const celleTotali = functionNumeroCelle(difficolta);

    console.log(`L'utente ha impostato la difficoltà: ${difficolta}`);
    console.log(`Numero celle per la partita: ${celleTotali}`);

    funzioneGeneraGriglia(celleTotali);
});



//creo funzione che mi dia il numero di celle in base alla difficoltà selezionata
function functionNumeroCelle(difficolta) {

    let nCelle;

    if (difficolta == "facile") {
        nCelle = 100;
    } else if (difficolta == "media") {
        nCelle = 81;
    } else if (difficolta == "difficile") {
        nCelle = 49;
    }

    return nCelle;

}

//creo una funzione che, dato il numero totale di celle, le disponga nella griglia

function funzioneGeneraGriglia(celleTotali) {

    containerGriglia.innerHTML = "";

    const cellePerRiga = Math.sqrt(celleTotali);
    console.log(`Dimensione griglia: ${cellePerRiga}x${cellePerRiga}`);

    const dimCella = 100 / cellePerRiga;

    for (let i = 0; i < celleTotali; i++) {

        const cella = document.createElement("div");
        cella.classList.add("box", "d-flex", "align-items-center", "justify-content-center");
        cella.style.width = dimCella + "%";
        cella.style.height = dimCella + "%";
        cella.textContent = (i + 1);
        cella.addEventListener("click", functionCellaSelezionata);

        containerGriglia.append(cella);
    }
}

function functionCellaSelezionata() {
    this.classList.add("box-selected");
}