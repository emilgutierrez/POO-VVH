// JavaScript code
function cambiarImagen() {
    var imagen = document.getElementById("imagen");
    if (imagen.src.match("imagen1.jpg")) {
        imagen.src = "imagen2.jpg";
        imagen.alt = "Imagen 2";
    } else {
        imagen.src = "imagen1.jpg";
        imagen.alt = "Imagen 1";
    }
}