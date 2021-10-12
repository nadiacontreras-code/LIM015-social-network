// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';
myFunction(); */

import { changeView } from './spa/route.js';

// En este archivo se esta escuchando el camnio de la URL
// Funcion para cambiar la url usando el evento hashchange

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
