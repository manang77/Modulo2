/** PRIMERA PARTE DEL EJERCICIO  

var hotel = {
    name: "Sol Melia Torremolinos",
    location: "Torremolinos",
    foto: "./img/Hotel1.png"
};

var rating = prompt("Indique puntuación del 1 al 5:");
var IsAnonymus = confirm("¿Quiere que la reseña sea anoónima?");

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel["name"];
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hotel["location"];
document.getElementById("img-hotel").src = hotel["foto"];
document.getElementById("rating").innerHTML = rating + " Estrellas";
document.getElementById("anonymous").checked= IsAnonymus;

FIN PRIMERA PARTE DEL EJERCICIO */

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

var estrellas = {
    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>"
}

var hotelSeleccionado = prompt("Indique hotel sobre el que quiere hacer la reseña: Melia o Fuerte");
var rating = prompt("Indique puntuación: una, dos, tres, cuatro o cinco");
var IsAnonymus = confirm("¿Quiere que la reseña sea anoónima?");

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[hotelSeleccionado].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[hotelSeleccionado].location;
document.getElementById("img-hotel").src = hoteles[hotelSeleccionado].foto;
document.getElementById("rating").innerHTML = estrellas[rating];
document.getElementById("anonymous").checked= IsAnonymus;
