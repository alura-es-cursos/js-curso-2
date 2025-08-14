# 🚀 Hora del Desafío

¡Bienvenido/a! Este proyecto es una práctica interactiva de JavaScript enfocada en el uso de **funciones**, **manipulación del DOM** y **eventos**.  
El objetivo es que, a través de botones en una página web, puedas ejecutar distintas funciones y ver cómo JavaScript dinamiza el contenido.

---

## 📝 Objetivo del Proyecto

- Dominar el uso de **`document.querySelector`** para seleccionar y modificar elementos del DOM.
- Crear y ejecutar funciones en JavaScript.
- Utilizar **eventos** (como el atributo `onclick`) para vincular botones con funciones.
- Interactuar con el usuario mediante **`console.log`**, **`alert`** y **`prompt`**.
- Convertir datos de entrada usando **`parseInt`**.

---

## 🎯 Funcionalidades

1. **Modificar el contenido del título**

   ```javascript
   let titulo = document.querySelector('h1');
   titulo.innerHTML = 'Hora del Desafío';
   ```
   Al cargar la página, el texto del `<h1>` cambia automáticamente.

2. **Mostrar mensaje en la consola**

   ```javascript
   function mostrarMensajeEnLaConsola() {
       console.log('¡El botón fue clicado!');
   }
   ```
   Botón: **Console** → Al hacer clic, se muestra el mensaje en la consola.

3. **Mostrar alerta con una ciudad ingresada**

   ```javascript
   function mostrarPrompt() {
       let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de México:");
       alert("Estuve en " + ciudad + " y me acordé de ti.");
   }
   ```
   Botón: **Prompt** → Solicita una ciudad y la incluye en el mensaje mostrado.

4. **Mostrar mensaje "AMO JS"**

   ```javascript
   function mostrarAlerta() {
       alert("AMO JS");
   }
   ```
   Botón: **Alert** → Muestra el mensaje "AMO JS".

5. **Suma de dos números ingresados**

   ```javascript
   function sumaDosNumeros() {
       let primerNumero = parseInt(prompt('Digite el primer número'));
       let segundoNumero = parseInt(prompt('Digite el segundo número'));
       let resultado = primerNumero + segundoNumero;
       alert(`${primerNumero} + ${segundoNumero} = ${resultado}`);
   }
   ```
   Botón: **Suma** → Solicita dos números y muestra el resultado de su suma.

---

## 🛠 Tecnologías Utilizadas

- **HTML** → Estructura de la página.
- **CSS** → Estilos (en `style.css`).
- **JavaScript** → Lógica e interactividad.

---

## ✨ Aprendizajes Clave

- Seleccionar y modificar elementos HTML desde JavaScript.
- Vincular eventos con funciones para responder a acciones del usuario.
- Solicitar y procesar datos del usuario.
- Diferencias entre `innerHTML` y `console.log`.
- Conversión de cadenas a números con `parseInt`.

---

## 🙋‍♂️ Autor

- **Jesús Palet**
- 📅 Año: 2025

---

¡Gracias por visitar este proyecto!  
Si tienes sugerencias o mejoras, no dudes en abrir un issue o hacer un fork. 🚩
