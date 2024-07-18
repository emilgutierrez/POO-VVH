// Variable global para el conteo
let count = 0;

// Función para contar cartas
function countCards(card) {
    switch (card) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            count++;
            break;
        case '10':
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
        // No hacemos nada con 7, 8, 9
    }

    // Determinar la acción basada en el conteo
    let action = (count > 0) ? "Bet" : "Hold";
    return `${count} ${action}`;
}

// Manejo del formulario
const form = document.getElementById('cardForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const cardInput = document.getElementById('cardInput').value.trim().toUpperCase();

    // Validación simple
    if (cardInput === '') {
        alert('Please enter a card value.');
        return;
    }

    // Contar cartas y mostrar resultado
    const result = countCards(cardInput);
    document.getElementById('result').textContent = result;
    document.getElementById('cardInput').value = ''; // Limpiar el campo de entrada
});