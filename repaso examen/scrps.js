// Función para realizar los cálculos
function procesarNumero() {
    // Leer un número del usuario
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Dividir el número en 3 partes
    let parte1 = numero / 3;
    let parte2 = numero / 3;
    let parte3 = numero / 3;

    // Sumar 10 a cada parte y multiplicar por 2
    let resultado1 = (parte1 + 10) * 2;
    let resultado2 = (parte2 + 10) * 2;
    let resultado3 = (parte3 + 10) * 2;

    // Mostrar los resultados en pantalla
    console.log(`Resultado de la primera parte: ${resultado1}`);
    console.log(`Resultado de la segunda parte: ${resultado2}`);
    console.log(`Resultado de la tercera parte: ${resultado3}`);

    // En un entorno de navegador, no se puede imprimir directamente
    // Pero podrías permitir al usuario guardar el resultado en un archivo si es necesario
}

// Llamar a la función
procesarNumero();