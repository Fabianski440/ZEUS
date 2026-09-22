// Animación al cargar la página

document.addEventListener("DOMContentLoaded", () => {

    console.log("Ficha de mascota cargada 🐾");

});


// Efecto al presionar los botones

const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        boton.style.transform = "scale(0.95)";

        setTimeout(() => {

            boton.style.transform = "";

        }, 150);

    });

});