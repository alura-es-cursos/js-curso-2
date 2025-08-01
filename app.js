let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío'

function botonApretado() {
    console.log("El botón fue clickeado");
}

function nombreCiudad() {
    let ciudad = prompt("¿Cuál es el nombre de una ciudad de Brasil?");
    alert(`Estuve en la ${ciudad}, y me acordé de ti.`);
    //alert("Estuve en " + ciudad + " y me acordé de ti.");
}

function botonAlerta() {
    alert("Yo amo JS");
}

function botonSuma() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let resultado = num1 + num2;
    alert(`El resultado de la suma es: ${resultado}`);
    //alert('${primerNumero} + ${segunNumero} = ${resultado}')
}