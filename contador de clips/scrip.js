// Obtener referencia al botón y al contador
const clipButton = document.getElementById('clipButton');
const clipCountDisplay = document.getElementById('clipCount');

// Contador inicial
let clipCount = 0;

// Agregar evento al botón de clip
clipButton.addEventListener('click', () => {
    clipCount++; // Incrementar el contador de clips
    clipCountDisplay.textContent = `Clips realizados: ${clipCount}`; // Actualizar el texto en el HTML
});