function modificarMensaje() {
    const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
  
    const mensajeModificado = [...mensajeInicial];
  
    mensajeModificado.push("mejores");
    mensajeModificado.unshift("Somos");
    mensajeModificado.shift();
    mensajeModificado.pop();
  
    const valoresEliminados = mensajeInicial.filter(item => !mensajeModificado.includes(item));
    const valoresAgregados = mensajeModificado.filter(item => !mensajeInicial.includes(item));
  
    const mensaje = `Arreglo inicial: ${mensajeInicial.join(", ")}\n\n` +
                    `Arreglo modificado: ${mensajeModificado.join(", ")}\n\n` +
                    `Valores eliminados: ${valoresEliminados.join(", ")}\n\n` +
                    `Valores agregados: ${valoresAgregados.join(", ")}`;
  
    alert(mensaje);
}

function operandoMetodos() {
    const numeros = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
  
    const numerosModificados = [...numeros];
  
    numerosModificados.push(100);
    numerosModificados.unshift(200);
    numerosModificados.shift();
    numerosModificados.pop();
  
    const valoresEliminados = numeros.filter(item => !numerosModificados.includes(item));
    const valoresAgregados = numerosModificados.filter(item => !numeros.includes(item));
  
    const sumaTotal = numerosModificados.reduce((total, num) => total + num, 0);
  
    const mensaje = `Arreglo inicial: ${numeros.join(", ")}\n\n` +
                    `Arreglo modificado: ${numerosModificados.join(", ")}\n\n` +
                    `Valores eliminados: ${valoresEliminados.join(", ")}\n\n` +
                    `Valores agregados: ${valoresAgregados.join(", ")}\n\n` +
                    `Suma total: ${sumaTotal}`;
  
    alert(mensaje);
}