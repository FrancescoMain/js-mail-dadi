// Chiedi all’utente la sua email,
let email = prompt("Inserisci un email");
// controlla che sia nella lista di chi può accedere,
const emaillist = ["invitato@1.com", "invitato@2.com", "invitato@3.com"];

for (let index = 0; index < emaillist.length; index++) {
    if (email == emaillist[index]) {
        console.log("La tua email è presesnte nella lista invitati");
        
    }
    
}
// stampa un messaggio appropriato sull’esito del controllo.

