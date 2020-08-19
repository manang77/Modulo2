/** PRIMERA PARTE DEL EJERCICIO  

var hotel = {
    name: "Sol Melia Torremolinos",
    location: "Torremolinos",
    foto: "./img/Hotel1.png"
};

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel["name"];
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hotel["location"];
document.getElementById("img-hotel").src = hotel["foto"];

var rating = prompt("Indique puntuación del 1 al 5:");
document.getElementById("rating").innerHTML = rating + " Estrellas";

var IsAnonymus = confirm("¿Quiere que la reseña sea anoónima?");
document.getElementById("anonymous").checked= IsAnonymus;

FIN PRIMERA PARTE DEL EJERCICIO */

// Objeto con los datos de los hoteles que se pueden seleccionar
var hoteles = {

    Melia: {
        name: "Sol Melia Torremolinos",
        location: "Torremolinos",
        foto: "./img/Hotel1.png"
    }, 
    Fuerte: {
        name: "Fuerte",
        location: "Marbella",
        foto: "./img/Hotel2.png"
    }
};

//Objeto para formatear la puntuacion con estrellas
var estrellas = {
    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>"
}

//Solicitar al usuario que seleccione el hotel a puntuar
var hotelSeleccionado = prompt("Indique hotel sobre el que quiere hacer la reseña: Melia o Fuerte");
document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[hotelSeleccionado].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[hotelSeleccionado].location;
document.getElementById("img-hotel").src = hoteles[hotelSeleccionado].foto;

//Solicitar al usuario la puntuacion para el hotel seleccionado
var rating = prompt("Indique puntuación: una, dos, tres, cuatro o cinco");
document.getElementById("rating").innerHTML = estrellas[rating];

//Solicitar al usuario confirmacion para que la reseña sea anonima
var IsAnonymus = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked= IsAnonymus;
