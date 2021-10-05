// Este es el punto de entrada de tu aplicacion

// Initialize Firebase

/* import { myFunction } from './lib/index.js';

myFunction(); */

// Google Login

const secInicio = document.getElementById('secinicio');
const sectionOne = document.createElement('section1');
const invitation = 'O bien ingresa con...';
sectionOne.innerHTML = `${invitation} <br> <button class="googleButton">Google Login</button>`;
secInicio.appendChild(sectionOne);
