// Este es el punto de entrada de tu aplicacion

// Initialize Firebase

/* import { myFunction } from './lib/index.js';

myFunction(); */

// Se ejeccutara cuando nuestra pagina se recargue

import { changeView } from './spa/route.js';
// En este archivo se esta escuchando el camnio de la URL
// Funcion para cambiar la url usando el evento hashchange

 const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);


// console.log(firebase, 21);

