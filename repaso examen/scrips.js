// Función para leer datos de la persona
function leerDatos() {
    // Leer datos del usuario (esto es para un entorno de navegador; en Node.js usaríamos `readline`)
    let nombre = prompt("Ingrese su nombre:");
    let apellidos = prompt("Ingrese sus apellidos:");
    let edad = prompt("Ingrese su edad:");

    // Imprimir los datos
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellidos: ${apellidos}`);
    console.log(`Edad: ${edad}`);
}

// Llamar a la función
leerDatos();