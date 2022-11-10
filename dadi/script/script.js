// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
let btnus = document.getElementById("btnus")
btnus.addEventListener("click",
function () {
    var userN = Math.floor(Math.random() * 6) + 1;
    btnus.classList.add("none")
    let userR = document.getElementById("userR")
    userR.innerHTML = (userN)
})



let btnia = document.getElementById("btnia")
btnia.addEventListener("click",
function () {
    var iaN = Math.floor(Math.random() * 6) + 1;
    btnia.classList.add("none")
    let iaR = document.getElementById("iaR")
    iaR.innerHTML = (iaN)
    // Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if (userN > iaN) {
        console.log("UserN ha vinto");
    
    } else if (iaN > userN) {
        console.log("Ian ha vinto");
    
    } else {
        console.log("Pareggio");
    }
    
})


