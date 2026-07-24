/* =========================================
   SALSA DATE
   buttons.js
   Lógica de botones
========================================= */


const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");


let noAttempts = 0;

let yesScale = 1;



/*
    Mensajes que aparecen cuando intenta
    presionar NO
*/

const noMessages = [

    "🥺 ¿Segura?",

    "Pero la salsa suena buena... 💃",

    "Prometo no pisarte 😅",

    "La Topa nos está esperando 🎺",

    "Solo una canción... ¿sí? ❤️",

    "Ese botón ya está dudando 😂",

    "Creo que el universo quiere un SÍ ✨"

];



/*
    Mover botón NO
*/

function moveNoButton(){


    noAttempts++;


    /*
        Actualizar mensaje
    */

    const index = Math.min(
        noAttempts - 1,
        noMessages.length - 1
    );


    message.textContent =
        noMessages[index];



    /*
        Obtener área disponible
    */

    const area =
        document.querySelector(".question-area");


    const areaWidth =
        area.clientWidth;


    const areaHeight =
        area.clientHeight;



    const buttonWidth =
        noButton.offsetWidth;


    const buttonHeight =
        noButton.offsetHeight;



    /*
        Nuevas posiciones seguras
    */

    const maxX =
        areaWidth - buttonWidth;


    const maxY =
        areaHeight - buttonHeight;



    const randomX =
        Math.random() * maxX;


    const randomY =
        Math.random() * maxY;



    /*
        Usamos transform para mejor rendimiento
        en Safari
    */

    noButton.style.transform = `

        translate3d(
            ${randomX}px,
            ${randomY}px,
            0
        )

        scale(${Math.max(
            .25,
            1 - noAttempts * .1
        )})

    `;



    /*
        Hacer crecer SI
    */

    yesScale += .08;


    yesButton.style.transform = `

        translate(-50%,-50%)

        scale(${yesScale})

    `;



    /*
        Cuando ya casi desaparece
    */

    if(noAttempts >= 8){

        noButton.textContent =
            "😳";


    }


    if(noAttempts >= 12){

        noButton.style.opacity =
            "0.25";

    }


}



/*
    Eventos mouse
*/

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);



noButton.addEventListener(
    "click",
    moveNoButton
);



/*
    Eventos táctiles móviles

    Importante para iPhone:
    touchstart funciona mejor que click
*/

noButton.addEventListener(
    "touchstart",
    function(e){

        e.preventDefault();

        moveNoButton();

    },
    {
        passive:false
    }
);



/*
    Evitar doble tap accidental
*/

noButton.addEventListener(
    "pointerdown",
    function(){

        moveNoButton();

    }
);



/*
    Función pública para resetear
    la experiencia
*/

function resetButtons(){


    noAttempts = 0;


    yesScale = 1;


    yesButton.style.transform =
        "translate(-50%,-50%) scale(1)";


    noButton.style.transform =
        "translate(-50%,-50%) scale(1)";


    noButton.style.opacity =
        "1";


    noButton.textContent =
        "💔 No";


    message.textContent =
        "La pista de baile nos espera 🎶";


}