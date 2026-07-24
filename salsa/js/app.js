/* =========================================
   SALSA DATE
   app.js
   Control principal de la aplicación
========================================= */



document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        const yesButton =
            document.getElementById(
                "yesButton"
            );


        const successScreen =
            document.getElementById(
                "successScreen"
            );


        const restartButton =
            document.getElementById(
                "restartButton"
            );



        /*
            Click en SI
        */

        yesButton.addEventListener(
            "click",
            ()=>{


                /*
                    Mostrar pantalla final
                */

                successScreen.style.display =
                    "flex";


                successScreen.classList.add(
                    "show"
                );



                /*
                    Efectos visuales
                */

                celebrate();



                /*
                    Música

                    Permitido porque viene
                    después de interacción
                */

                playSalsaMusic();



                /*
                    Mensaje en consola
                */

                console.log(
                    "💃 La salsa comienza!"
                );


            }
        );





        /*
            Reiniciar experiencia
        */

        restartButton.addEventListener(
            "click",
            ()=>{


                successScreen.style.display =
                    "none";


                successScreen.classList.remove(
                    "show"
                );



                resetButtons();



                pauseSalsaMusic();



            }
        );



    }
);