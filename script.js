function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = 

document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "INFORMATICIEN",
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += 

texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)

    }
}
window.onload = typeWriter
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi par défaut du formulaire.

        // Récupération des champs du formulaire.
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        let valid = true;
        let errorMessage = "";

        // Validation du champ Nom.
        if (name === "") {
            valid = false;
            errorMessage += "Le champ Nom est requis.\n";
        } else if (name.length < 2) {
            valid = false;
            errorMessage += "Le champ Nom doit contenir au moins 2 caractères.\n";
        }

        // Validation du champ Email.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            valid = false;
            errorMessage += "Le champ Email est requis.\n";
        } else if (!emailPattern.test(email)) {
            valid = false;
            errorMessage += "Le champ Email doit être une adresse email valide.\n";
        }

        // Validation du champ Sujet.
        if (subject === "") {
            valid = false;
            errorMessage += "Le champ Sujet est requis.\n";
        }

        // Validation du champ Message.
        if (message === "") {
            valid = false;
            errorMessage += "Le champ Message est requis.\n";
        } else if (message.length < 10) {
            valid = false;
            errorMessage += "Le champ Message doit contenir au moins 10 caractères.\n";
        }

        // Affichage des erreurs ou soumission du formulaire.
        if (!valid) {
            alert(errorMessage);
        } else {
            alert("Formulaire envoyé avec succès !");
            form.reset(); // Réinitialise le formulaire après envoi.
        }
    });
});
