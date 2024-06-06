// Definir un array con las rutas de las imágenes
const imagenes = [
    "Cheems_el_perrito_meme_murió.jpg",
    "perro.jpg",
    "bdcb3f389881a33dcfd785716cc61c67.jpg",
    "descarga (1).jfif"
];

// Obtener el botón y la imagen principal
const botonCambiar = document.getElementById('cambiarImagenBtn');
const imagenPrincipal = document.getElementById('imagenPrincipal');

// Definir un contador para realizar un seguimiento de la imagen actual
let contadorImagen = 0;

// Agregar un evento de clic al botón
botonCambiar.addEventListener('click', () => {
    // Cambiar la imagen principal a la siguiente en el array
    imagenPrincipal.src = imagenes[contadorImagen];
    
    // Incrementar el contador de imagen
    contadorImagen++;

    // Si el contador excede el número de imágenes, volver al principio del array
    if (contadorImagen >= imagenes.length) {
        contadorImagen = 0;
    }
});