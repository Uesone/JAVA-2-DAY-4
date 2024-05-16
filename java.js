/* Creazione variabili necessarie */
const containerTabellone = document.getElementById("tabellone");
const bottonePescaNumero = document.getElementById("bottonePescaNumero");
const numeri = [];

/* Creazione dinamica della tabella */

function creaTabellone() {
  const tabellone = document.createElement("tabellone");
  tabellone.classList.add("tabellone-bingo");

  for (let i = 0; i < 11; i++) {
    const riga = document.createElement("tr");
    for (let f = 0; f < 7; f++) {
      const cella = document.createElement("td");
      const numero = i * 7 + (f + 1);
      if (numero <= 76) {
        /* Aggiunto controllo per non superare 76 numeri */
        cella.textContent = numero;
        riga.appendChild(cella);
        numeri.push(numero);
      }
    }
    tabellone.appendChild(riga);
  }
  containerTabellone.appendChild(tabellone);
}
/* Numeri Randomici */

function numeriRandom() {
  const index = Math.floor(Math.random() * numeri.length);
  return numeri.splice(index, 1)[0];
}

function evidenziaNumero(numero) {
  const celle = document.querySelectorAll(".tabellone-bingo td");
  celle.forEach(function (cella) {
    if (cella.textContent.trim() === numero.toString()) {
      cella.classList.add("highlight");
    }
  });
}

creaTabellone();

bottonePescaNumero.addEventListener("click", () => {
  const pescaNumero = numeriRandom();
  evidenziaNumero(pescaNumero);
});
