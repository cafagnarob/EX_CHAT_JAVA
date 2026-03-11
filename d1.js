// 50 esercizi di pratica di JavaScript
// Argomenti: oggetti, array, condizionali, switch, for, while, Math.random
// Ogni esercizio include un piccolo suggerimento.

/*
ESERCIZIO 1
Crea un oggetto chiamato "libro" con le proprietà:
titolo, autore, pagine e letto.

SUGGERIMENTO:
Ricorda che un oggetto usa coppie chiave: valore dentro le parentesi graffe {}.
*/
const libro = {
  titolo: "Daje Roma",
  autore: "Francesco Totti",
  pagine: 2,
  letto: false,
}

// ESERCIZIO 2
// Accedi al valore della proprietà "titolo" dell'oggetto "libro" e salvalo in una variabile chiamata "titoloLibro".

let titoloLibro = libro.titolo

console.log(titoloLibro)
// SUGGERIMENTO:
// Puoi usare la dot notation: oggetto.proprieta.
// */

/*
ESERCIZIO 3
Aggiungi una nuova proprietà all'oggetto "libro" chiamata "genere" con valore "fantasy".

SUGGERIMENTO:
Puoi creare nuove proprietà scrivendo oggetto.nuovaProprieta = valore.
*/
libro.genere = "fantasy"
console.log(libro)
/*
ESERCIZIO 4
Elimina la proprietà "letto" dall'oggetto "libro".

SUGGERIMENTO:
Esiste una parola chiave specifica per cancellare proprietà da un oggetto.
*/
delete libro.letto
console.log(libro)
/*
ESERCIZIO 5
Crea un oggetto chiamato "studente" che abbia una proprietà "indirizzo".
"indirizzo" deve essere un altro oggetto con le proprietà: via, citta e paese.

SUGGERIMENTO:
Questo è un oggetto annidato: un oggetto dentro un altro oggetto.
*/
const studente = {
  indirizzo: {
    via: "Via Canosa",
    citta: "Milano",
    paese: "Italia",
  },
}
console.log(studente)
/*
ESERCIZIO 6
Recupera la città dell'oggetto "studente" e salvala in una variabile chiamata "cittaStudente".

SUGGERIMENTO:
Quando ci sono oggetti dentro altri oggetti, puoi concatenare gli accessi con i punti.
*/

let cittaStudente = studente.indirizzo.citta
console.log(cittaStudente)
/*
ESERCIZIO 7
Crea un array chiamato "frutta" con 5 frutti diversi.

SUGGERIMENTO:
Un array usa le parentesi quadre [] e gli elementi sono separati da virgole.
*/
const frutta = ["fragole", "mela", "pera", "banana", "kiwi"]
console.log(frutta)
/*
ESERCIZIO 8
Stampa il primo e l'ultimo elemento dell'array "frutta".

SUGGERIMENTO:
Il primo indice è 0. L'ultimo si ottiene con length - 1.
*/
console.log(frutta[0])
console.log(frutta[frutta.length - 1])
/*
ESERCIZIO 9
Cambia il secondo elemento di "frutta" con "kiwi".

SUGGERIMENTO:
Puoi riassegnare un valore usando array[indice] = nuovoValore.
*/

frutta[1] = "kiwi"
console.log(frutta)

/*
ESERCIZIO 10
Aggiungi "mango" alla fine dell'array "frutta".

SUGGERIMENTO:
Usa il metodo che aggiunge elementi in coda.
*/
;(frutta.push("mango"), console.log(frutta))

/*
ESERCIZIO 11
Rimuovi l'ultimo elemento dell'array "frutta".

SUGGERIMENTO:
Usa il metodo opposto a push().
*/

frutta.pop()
console.log(frutta)

/*
ESERCIZIO 12
Aggiungi "pera" all'inizio dell'array "frutta".

SUGGERIMENTO:
Esiste un metodo specifico per inserire all'inizio.
*/
frutta.unshift("pera")
/*
ESERCIZIO 13
Rimuovi il primo elemento dell'array "frutta".

SUGGERIMENTO:
Usa il metodo opposto a unshift().
*/
frutta.shift()
/*
ESERCIZIO 14
Sostituisci un elemento centrale dell'array "frutta" usando splice().

SUGGERIMENTO:
splice() può rimuovere e aggiungere elementi in una posizione precisa.
*/

frutta.splice(2, 1, "arancia")

/*
ESERCIZIO 15
Crea un nuovo array chiamato "primeDueFrutta" con una copia dei primi due frutti.

SUGGERIMENTO:
Ti serve un metodo che ritagli una porzione senza modificare l'array originale.
*/

const primeDueFrutta = frutta.slice(0, 2)
console.log(primeDueFrutta)
/*
ESERCIZIO 16
Crea una variabile "voto" con un numero. Usa if/else per stampare "Promosso" se il voto è 18 o più, e "Bocciato" altrimenti.

SUGGERIMENTO:
Devi confrontare il valore di una variabile con un numero.
*/
let voto = 20

if (voto >= 18) {
  console.log("PROMOSSO!")
} else {
  console.log("Bocciato")
}
/*
ESERCIZIO 17
Crea una variabile "eta". Se è 18 o più, stampa "Maggiorenne". Altrimenti stampa "Minorenne".

SUGGERIMENTO:
È un altro esercizio base di if/else con una comparazione numerica.
*/
let età = 15

if (età >= 18) {
  console.log("maggiorenne")
} else {
  console.log("minorenne")
}

/*
ESERCIZIO 18
Crea una variabile "colore". Se è "rosso", stampa "STOP"; se è "giallo", stampa "ATTENZIONE"; se è "verde", stampa "VAI"; altrimenti stampa "Colore non valido".

SUGGERIMENTO:
Qui puoi risolvere con if/else if/else.
*/

// const colore = "bianco"
// if (colore === "rosso") {
//   console.log("stop")
// } else if (colore === "giallo") {
//   console.log(attenzione)
// } else if (colore === "verde") {
//   console.log("vai")
// } else {
//   console.log("colore non accettato")
// }
/*
ESERCIZIO 19
Ripeti l'esercizio precedente, ma usando switch.

SUGGERIMENTO:
Ogni case dovrebbe terminare con break per evitare di continuare.
*/
const colore = "verde"

switch (colore) {
  case "rosso":
    console.log("stop")
    break
  case "giallo":
    console.log("attenzione")
    break
  case "verde":
    console.log("vai")
    break
  default:
    console.log("colore non accettato")
}

/*
ESERCIZIO 20
Crea una variabile "utente". Se il suo valore è esattamente "Franko", stampa un saluto personalizzato. Altrimenti stampa "Utente non riconosciuto".

SUGGERIMENTO:
Usa la comparazione stretta con ===.
*/
const utente = "franko"

if (utente === "Franko") {
  console.log("ciao Franko")
} else {
  console.log("chi cazzo sei? " + utente)
}
/*
ESERCIZIO 21
Crea una variabile "messaggio" con una stringa vuota. Usa un if per controllare se è falsy.

SUGGERIMENTO:
Una stringa vuota in JavaScript si comporta come false.
*/
const messaggio = ""

if (messaggio) {
  console.log("truthy")
} else {
  console.log("falsy")
}

/*
ESERCIZIO 22
Crea una variabile "quantita" con valore 0. Usa un if per controllare se è falsy.

SUGGERIMENTO:
Anche lo 0 appartiene ai valori falsy.
*/
const quantita = 0

if (quantita) {
  console.log("truthy")
} else {
  console.log("falsy")
}

/*
ESERCIZIO 23
Usa un for per stampare i numeri da 0 a 9.

SUGGERIMENTO:
Ricorda la struttura: inizializzazione; condizione; incremento.
*/

for (let i = 0; i < 10; i++) {
  console.log(i)
}

/*
ESERCIZIO 24
Usa un for per stampare i numeri da 5 a 15.

SUGGERIMENTO:
Devi solo cambiare il valore iniziale e la condizione finale.
*/

for (let i = 5; i < 16; i++) {
  console.log(i)
}

/*
ESERCIZIO 25
Usa un for per stampare i numeri pari da 0 a 20.

SUGGERIMENTO:
Puoi aumentare di 2 in 2, oppure controllare con una condizione.
*/
for (let i = 0; i < 21; i = i + 2) {
  console.log(i)
}

/*
ESERCIZIO 26
Crea un array chiamato "nomi" con vari nomi e usa un for per stamparli tutti.

SUGGERIMENTO:
La condizione del for di solito usa array.length.
*/

/*
ESERCIZIO 27
Scorri l'array "nomi" e stampa solo i nomi che hanno più di 5 lettere.

SUGGERIMENTO:
Dentro il for usa un if su nome.length.
*/

/*
ESERCIZIO 28
Crea un array di numeri e calcola la somma totale con un for. Salva il risultato in "sommaTotale".

SUGGERIMENTO:
Ti serve una variabile accumulatore che parta da 0.
*/

/*
ESERCIZIO 29
Crea un array di numeri e calcola quanti sono maggiori di 10.

SUGGERIMENTO:
Usa un contatore che aumenti solo quando la condizione è vera.
*/

/*
ESERCIZIO 30
Crea un array chiamato "persone" con 3 oggetti. Ogni oggetto deve avere nome ed età.

SUGGERIMENTO:
È un array di oggetti, proprio come nell'esempio di Star Wars.
*/

/*
ESERCIZIO 31
Scorri l'array "persone" e stampa solo i nomi.

SUGGERIMENTO:
Ad ogni iterazione del for avrai accesso a persone[i].
*/

/*
ESERCIZIO 32
Scorri l'array "persone" e stampa solo le persone maggiorenni.

SUGGERIMENTO:
Devi controllare la proprietà età di ogni oggetto.
*/

/*
ESERCIZIO 33
Crea un array vuoto chiamato "nomiPersone" e riempilo con i nomi dell'array "persone".

SUGGERIMENTO:
Combina for + push().
*/

/*
ESERCIZIO 34
Crea un array vuoto chiamato "personeMaggiorenni" e salva lì solo gli oggetti la cui età è maggiore o uguale a 18.

SUGGERIMENTO:
Invece di salvare stringhe, questa volta salverai oggetti interi.
*/

/*
ESERCIZIO 35
Crea un oggetto chiamato "coloriOcchi" con queste proprietà: blu, marrone, verde. Ognuna deve iniziare con un array vuoto.

SUGGERIMENTO:
Stai preparando una struttura per classificare i dati.
*/

/*
ESERCIZIO 36
Crea un array di persone dove ogni oggetto abbia nome e coloreOcchi. Poi usa un for per inserire ogni persona nell'array corretto dentro "coloriOcchi".

SUGGERIMENTO:
Puoi farlo con if/else oppure con switch in base al valore di coloreOcchi.
*/

/*
ESERCIZIO 37
Risolvi l'esercizio precedente usando switch.

SUGGERIMENTO:
switch è utile quando confronti molti valori esatti possibili.
*/

/*
ESERCIZIO 38
Usa un while per stampare i numeri da 1 a 5.

SUGGERIMENTO:
Ti serve una variabile contatore che cambi dentro il while.
*/

/*
ESERCIZIO 39
Usa un while per sommare i numeri da 1 a 10 e salva il risultato in una variabile.

SUGGERIMENTO:
Devi combinare contatore + accumulatore.
*/

/*
ESERCIZIO 40
Crea un array di numeri e usa un while per calcolare la somma totale.

SUGGERIMENTO:
Con while userai normalmente un indice manuale che parte da 0.
*/

/*
ESERCIZIO 41
Crea un array di prodotti con nome e prezzo. Usa un while per calcolare il prezzo totale.

SUGGERIMENTO:
È uguale a sommare masse o età, ma stavolta con i prezzi.
*/

/*
ESERCIZIO 42
Usa if/else if/else per classificare un acquisto in base al totale:
- meno di 50: "Acquisto piccolo"
- tra 50 e 100: "Acquisto medio"
- più di 100: "Acquisto grande"

SUGGERIMENTO:
Ordina bene gli intervalli per evitare sovrapposizioni.
*/

/*
ESERCIZIO 43
Cambia la proprietà "stato" di vari oggetti di un array da "pendente" a "completato" se rispettano una certa condizione.

SUGGERIMENTO:
Questo esercizio riguarda la modifica di proprietà dentro un for.
*/

/*
ESERCIZIO 44
Crea un array con vari nomi. Poi elimina dall'array tutti i nomi che compaiono anche in un altro array chiamato "nomiVietati".

SUGGERIMENTO:
Puoi scorrere uno dei due array e usare splice() per cancellare le corrispondenze.
*/

/*
ESERCIZIO 45
Mostra in console la lunghezza di un array prima e dopo aver eliminato degli elementi.

SUGGERIMENTO:
Usa la proprietà length prima e dopo l'operazione.
*/

/*
ESERCIZIO 46
Genera un numero casuale da 1 a 6 simulando un dado.

SUGGERIMENTO:
Combina Math.random() con Math.ceil() oppure Math.floor().
*/

/*
ESERCIZIO 47
Usa un while per lanciare un dado finché non esce 6. Salva quanti tentativi sono stati necessari.

SUGGERIMENTO:
Ti servono una variabile per il risultato attuale e un'altra per contare i tentativi.
*/

/*
ESERCIZIO 48
Seleziona un elemento casuale da un array di personaggi e stampalo in console.

SUGGERIMENTO:
Devi generare un indice casuale tra 0 e array.length - 1.
*/

/*
ESERCIZIO 49
Seleziona un oggetto casuale da un array e scrivi un console.log descrittivo usando le sue proprietà.

SUGGERIMENTO:
Prima ottieni l'oggetto casuale, poi costruisci una frase con i suoi dati.
*/

/*
ESERCIZIO 50
Crea un esercizio completo:
- un array di 5 oggetti "film"
- estrai i titoli in un nuovo array
- separa i film per genere
- calcola la durata totale
- classifica quella durata con if/else
- scegli un film casuale e descrivilo in console

SUGGERIMENTO:
Questo esercizio mescola quasi tutto quello che hai praticato: array, oggetti, for, while, if, switch e Math.random().
*/
