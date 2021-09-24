// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);


import { myFunction } from './lib/index.js';

myFunction();
//Esta linea es de practica de 