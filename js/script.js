/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
-  chiedere all'utente il n di km che vuole percorrere 
-  chedere all'utente quanti anni ha
-  calcolare costo viaggio senza sconti 
?  SE l'utente ha - di 18 anni 
   - applicare sconto 20%
: ALTRIMENTI 
? SE l'utente ha + di 65 anni 
   - applicare sconto 40%
:  ALTRIMENTI
   - paga l importo intero 
   */

let kmDaPercorrere = prompt("Quanti km vuoi percorrere?");

let userAge = prompt("Quanti anni hai?");

let ticketPrice = kmDaPercorrere * 0.21;

let under18 = ticketPrice - (ticketPrice / 100) * 20;

let over65 = ticketPrice - (ticketPrice / 100) * 40;

if (userAge < 18 ) {
  document.writeln(under18.toFixed(2) + "€")
} else if (userAge > 65) {
  document.writeln(over65.toFixed(2) + "€")
} else {
  document.writeln(ticketPrice.toFixed(2) + "€")
}