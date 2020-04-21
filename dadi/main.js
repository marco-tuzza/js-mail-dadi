// Chiediamo al giocatore di scegliere un numero da 1 a 6
var numero_giocatore = prompt('Scegli un numero da 1 a 6');
console.log(numero_giocatore);
// Generiamo un numero, in maniera casuale, da 1 a 6
var numero_cpu = (Math.floor(Math.random() * 6) + 1);
console.log(numero_cpu);
// Stabiliamo le condizioni di vittoria
if (numero_giocatore > numero_cpu && numero_giocatore <=6 && numero_giocatore > 0) {
    console.log('Congratulazioni! Hai vinto!');
}
// Facciamo in modo che il giocatore non bari utilizzando numeri più alti del 6
if (numero_giocatore > 6) {
    console.log('Non si bara!');
}
// Il resto sono le condizioni di sconfitta
else {
    console.log('Peccato! Hai perso!');
}
