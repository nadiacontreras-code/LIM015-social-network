// Este es el punto de entrada de tu aplicacion
//import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
/* const firebaseConfig = {
  //...
};
const app = initializeApp(firebaseConfig); */

/* import { myFunction } from './lib/index.js';
myFunction(); */


const rootSection = document.getElementById('user');
const homeContent = '<h1>User</h1>';
const logOutContent = '<h1>logOut<h1>';

const linkContent = {
  '#user': homeContent,
  '#logOut': logOutContent,
}

const routes = {
  '/': homeContent,
  '/logOut': logOutContent
}

//Cambiar HTML al cliclea links (1):

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  rootSection.innerHTML = linkContent[hash];
  changeRoute(hash);
});

window.onpopstate = () => {
  const pathname = window.location.pathname;
  rootSection.innerHTML = routeContent[pathname];
};














