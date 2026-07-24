/* =========================================
   SALSA DATE
   confetti.js
   Efectos de celebración
========================================= */


const confettiContainer =
    document.getElementById(
        "confettiContainer"
    );



/*
    Colores estilo salsa
*/

const confettiColors = [

    "#d62828",
    "#ff006e",
    "#ffd166",
    "#06d6a0",
    "#118ab2",
    "#ffffff"

];



/*
    Crear confeti
*/

function createConfetti(
    amount = 120
){


    for(
        let i = 0;
        i < amount;
        i++
    ){


        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti-piece";



        /*
            Posición inicial
        */

        piece.style.left =
            Math.random() * 100 + "vw";



        /*
            Tamaño aleatorio
        */

        const size =
            Math.random() * 8 + 6;


        piece.style.width =
            size + "px";


        piece.style.height =
            size * 1.8 + "px";



        /*
            Color
        */

        piece.style.backgroundColor =
            confettiColors[
                Math.floor(
                    Math.random()
                    *
                    confettiColors.length
                )
            ];



        /*
            Rotación inicial
        */

        piece.style.transform =
            `
            rotate(
                ${Math.random()*360}deg
            )
            `;



        /*
            Duración aleatoria
        */

        piece.style.animationDuration =
            (
                Math.random() * 2 + 3
            )
            +
            "s";



        piece.style.animationDelay =
            (
                Math.random()
                *
                .8
            )
            +
            "s";



        confettiContainer.appendChild(
            piece
        );



        /*
            Limpiar después
        */

        setTimeout(
            ()=>{

                piece.remove();

            },
            5000
        );


    }

}





/*
    Crear corazones
*/

function createHearts(
    amount = 25
){


    for(
        let i = 0;
        i < amount;
        i++
    ){


        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "heart";



        heart.textContent =
            [
                "❤️",
                "💃",
                "🕺",
                "🎶"
            ]
            [
                Math.floor(
                    Math.random()
                    *
                    4
                )
            ];



        heart.style.left =
            Math.random()
            *
            100
            +
            "vw";



        heart.style.bottom =
            "0px";



        heart.style.fontSize =
            (
                Math.random()
                *
                25
                +
                20
            )
            +
            "px";



        heart.style.animationDelay =
            (
                Math.random()
                *
                1
            )
            +
            "s";



        confettiContainer.appendChild(
            heart
        );



        setTimeout(
            ()=>{

                heart.remove();

            },
            4000
        );


    }

}





/*
    Función principal
*/

function celebrate(){


    createConfetti(150);


    createHearts(35);


}