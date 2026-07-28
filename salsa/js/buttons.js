/* =========================================
   SALSA DATE
   buttons.js
   Lógica de botones corregida
========================================= */


const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");


let noAttempts = 0;
let yesScale = 1;



/*
    Mensajes cuando intenta decir NO
*/

const noMessages = [

    "🥺 ¿Segura?",

    "Pero la salsa suena buena... 💃",

    "Prometo no pisarte 😅",

    "La Topa nos está esperando 🎺",

    "Solo una canción... ❤️",

    "Ese botón está perdiendo fuerza 😂",

    "Creo que el destino quiere un SÍ ✨",

    "Ya casi aceptas 😏"

];



/*
    Mover botón NO
*/

function moveNoButton(){


    noAttempts++;


    /*
        Cambiar mensaje
    */

    const messageIndex = Math.min(
        noAttempts - 1,
        noMessages.length - 1
    );


    message.textContent =
        noMessages[messageIndex];



    const area =
        document.querySelector(
            ".question-area"
        );



    const areaWidth =
        area.clientWidth;


    const areaHeight =
        area.clientHeight;



    const buttonWidth =
        noButton.offsetWidth;


    const buttonHeight =
        noButton.offsetHeight;



    /*
        Margen de seguridad
        para que nunca salga
        de la tarjeta
    */

    const padding = 10;



    const maxX =
        areaWidth -
        buttonWidth -
        padding;



    const maxY =
        areaHeight -
        buttonHeight -
        padding;



    /*
        Nueva posición aleatoria
    */

    const randomX =
        Math.max(
            padding,
            Math.random() * maxX
        );


    const randomY =
        Math.max(
            padding,
            Math.random() * maxY
        );



    /*
        Mover usando left/top
        y no transform completo
        para no romper CSS
    */

    noButton.style.left =
        randomX + "px";


    noButton.style.top =
        randomY + "px";



    /*
        Reducir tamaño del NO
    */

    const noScale =
        Math.max(
            0.35,
            1 - (noAttempts * 0.08)
        );


    noButton.style.transform =
        `scale(${noScale})`;



    /*
        Hacer crecer SI
    */

    yesScale += 0.08;


    yesButton.style.transform =
        `
        translate(-50%, -50%)
        scale(${yesScale})
        `;



    /*
        Después de varios intentos
    */

    if(noAttempts >= 8){

        noButton.textContent =
            "😳";

    }



    if(noAttempts >= 12){

        noButton.style.opacity =
            "0.35";

    }


}





/*
    Eventos escritorio
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
    Eventos móviles

    Safari iPhone responde mejor
    con pointer/touch
*/

noButton.addEventListener(
    "pointerdown",
    function(event){

        event.preventDefault();

        moveNoButton();

    }
);



noButton.addEventListener(
    "touchstart",
    function(event){

        event.preventDefault();

        moveNoButton();

    },
    {
        passive:false
    }
);





/*
    Reset al volver
*/

function resetButtons(){


    noAttempts = 0;

    yesScale = 1;



    noButton.style.left =
        "50%";


    noButton.style.top =
        "50%";


    noButton.style.transform =
        "translate(-50%, -50%)";



    noButton.style.opacity =
        "1";



    noButton.textContent =
        "💔 No";



    yesButton.style.transform =
        "translate(-50%, -50%) scale(1)";



    message.textContent =
        "La pista de baile nos espera 🎶";


}