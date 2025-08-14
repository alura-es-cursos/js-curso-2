// Selecciona el elemento <h1> y cambia su contenido a 'Hora del Desafío'
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

/**
 * Imprime un mensaje en la consola cuando se hace clic en el botón.
 * Cambio realizado: Se agregó la función para mostrar un mensaje en la consola.
 */

function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}

/**
 * Solicita al usuario el nombre de una ciudad de México mediante un prompt,
 * y luego muestra una alerta personalizada con ese nombre.
 * Cambio realizado: Se agregó la función para interactuar con el usuario usando prompt y alert.
 */
function mostrarPrompt() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de México:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}

/**
 * Muestra una alerta con el mensaje "AMO JS".
 * Cambio realizado: Se agregó la función para mostrar una alerta simple.
 */
function mostarAlerta(){
    alert("AMO JS");
} 

/**
 * Solicita dos números al usuario, los suma y muestra el resultado en una alerta.
 * Cambio realizado: Se agregó la función para sumar dos números ingresados por el usuario.
 */
function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segundoNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segundoNumero;
    alert(`${primerNumero} + ${segundoNumero} = ${resultado}`)
}
