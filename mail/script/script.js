// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,

// stampa un messaggio appropriato sull’esito del controllo.

let btn = document.getElementById("btn");

const emaillist = ["invitato@1.com", "invitato@2.com", "invitato@3.com"];


btn.addEventListener("click",
function () {
    let email = document.getElementById("Input1").value;
    console.log(email);


    for (let index = 0; index < emaillist.length; index++) {
    if (email == emaillist[index]) {
        var presente = 1;
        // bottone che scompare al click 
        btn.classList.add("none");
        // compare messaggio di log in 
        const afterlog = document.getElementById("ms_afterlog");
        afterlog.style.display = "block"; 
        afterlog.style.filter = "opacity(1)"; 
    }
    
    }

    if (presente !== 1) {
        let formcont = document.getElementById("formcont")
        console.log("La tua email non è presente");
        btn.classList.add("none");
        // compare messaggio form 
        const afternone = document.getElementById("ms_afternone");
        afternone.style.display = "block"; 
        afternone.style.filter = "opacity(1)"; 
        formcont.classList.add("none")

        // nel momento in cui viene aggiunta un altra email aggiungila alla lista
        // e ridai il collegament 
        let sing = document.getElementById("sing");
        sing.addEventListener("click",
        function() {
            let singform = document.getElementById("singform").value
            emaillist.push(singform);
            console.log(emaillist);
            const afterlog = document.getElementById("ms_afterlog");
            afterlog.style.display = "block"; 
            afterlog.style.filter = "opacity(1)"; 
            afternone.style.display = "none";

            
            
        })

    
    }

    
})
