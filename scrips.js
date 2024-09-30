// Inicializa un objeto para guardar los contadores de likes
const likes = {
    like1: 0,
    like2: 0,
    like3: 0
};

// Función para actualizar el contador de likes
function actualizarContador(id) {
    likes[id]++;
    document.getElementById(id).textContent = likes[id];
}

// Agrega eventos a los botones
const botones = document.querySelectorAll('.btn-like');
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const id = boton.getAttribute('data-id');
        actualizarContador(id);
    });
});