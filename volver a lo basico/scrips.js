// JavaScript code
function cambiarImagen() {
    var imagen = document.getElementById("imagen");
    if (imagen.src.match("Cheems el perrito meme, murió.jpg")) {
        imagen.src = "Cheems el perrito meme, murió.jpg";
        imagen.alt = "Cheems el perrito meme, murió.jpg";
    } else {
        imagen.src = "imagen1.jpg";
        imagen.alt = "Imagen 1";
    }
}