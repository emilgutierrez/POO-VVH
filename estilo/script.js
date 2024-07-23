// Definir los colores que quieres usar
var colores = ["red", "blue", "green", "yellow", "orange", "purple"];

// Obtener el contenedor donde se añadirán los cuadros de colores
var container = document.getElementById("container");

// Generar cuadros de colores y añadirlos al contenedor
colores.forEach(function(color) {
    var box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    container.appendChild(box);
});