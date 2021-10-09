import { login, logout } from './firebase/firebase-fn.js';
// Este es el punto de entrada de tu aplicacion

// Initialize Firebase

/* import { myFunction } from './lib/index.js';

myFunction(); */

// Google Login

// Se ejeccutara cuando nuestra pagina se recargue

import { changeView } from './spa/route.js';

// En este archivo se esta escuchando el camnio de la URL
// Funcion para cambiar la url usando el evento hashchange

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
// googlelogin

const buttonLogin = document.querySelector('#btn-Google');
const buttonLogout = document.querySelector('#btn-OutLog ');
// let para mantener la variable del usuario logueado
let currentUser;
// metodo para saber si el usuario esta logueado o no
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    currentUser = user;
    console.log('Usuario logueado', currentUser.displayName);
  }
});

buttonLogin.addEventListener('click', async (e) => {
  try {
    currentUser = await login();
  } catch (error) {
    console.log(e);
  }
});

buttonLogout.addEventListener('click', async (e) => {
  logout();
  console.log(e);
});
