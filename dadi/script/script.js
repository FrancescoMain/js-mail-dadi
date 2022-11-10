// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
let userN = Math.floor(Math.random() * 6) + 1;
let iaN = Math.floor(Math.random() * 6) + 1;
console.log(userN , iaN);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userN > iaN) {
    console.log("UserN ha vinto");
    
} else if (iaN > userN) {
    console.log("Ian ha vinto");
    
} else {
    console.log("Pareggio");
}