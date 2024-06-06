// Obtener todas las imágenes en la lista
const imagenes = document.querySelectorAll('ul li img');

// Iterar sobre cada imagen y agregar un evento de clic
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        // Obtener la ruta de la imagen clicada
        const nuevaImagenSrc = imagen.getAttribute('src');

        // Obtener la imagen principal y cambiar su src
        const imagenPrincipal = document.getElementById('imagenPrincipal');
        imagenPrincipal.setAttribute('src', nuevaImagenSrc);
    });
});