/* =========================================
   SALSA DATE
   music.js
   Control de música
========================================= */


const salsaMusic =
    document.getElementById(
        "salsaMusic"
    );



/*
    Configuración inicial
*/

if(salsaMusic){


    salsaMusic.volume = 0.45;


}



/*
    Reproducir música

    Los navegadores móviles permiten
    esto después de un click/tap
*/

function playSalsaMusic(){


    if(!salsaMusic){

        return;

    }



    salsaMusic
        .play()
        .catch(
            error => {

                console.log(
                    "Audio bloqueado:",
                    error
                );

            }
        );


}



/*
    Pausar música
*/

function pauseSalsaMusic(){


    if(!salsaMusic){

        return;

    }


    salsaMusic.pause();


}



/*
    Reiniciar música

*/

function restartSalsaMusic(){


    if(!salsaMusic){

        return;

    }


    salsaMusic.currentTime = 0;


    salsaMusic.play();


}