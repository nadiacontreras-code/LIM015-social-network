// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);


/* import { myFunction } from './lib/index.js';

myFunction(); */


const rootSection = document.getElementById('root');

const homeContent = `<h1>Home</h1>`;
const aboutContent = `<h1>Acerca de</h1>`;

const linkContent = {
  '#home': homeContent,
  '#about': aboutContent,
};

const routes = {
  '/': homeContent,
  '/about': aboutContent,
};



//Mostrar HTML correcto al recargar la pagina
const pathname = window.location.pathname;
rootSection.innerHTML = routes[pathname];

//Cambiar ruta en la URL para que no use el '#', ej. '/about'
const changeRoute = (hash) => {
  //cambie la URL para no ocupar el '#'
  if(hash === '#user'){
    window.history.replaceState({}, 'user', '/');
  }else if(hash === '#logout'){
    window.history.replaceState({}, 'logout', '/logout');
  }
}; 