function verificarNumeros() {
    // Obtener los valores de los números ingresados
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var num3 = parseInt(document.getElementById('num3').value);

    // Verificar si todos los números son mayores que 0
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        document.getElementById('resultado').innerText = "Todos los números son mayores que 0.";
    } else {
        document.getElementById('resultado').innerText = "Al menos uno de los números no es mayor que 0.";
    }
}