// Este es el punto de entrada de tu aplicacion
//import { initializeApp } from 'firebase/app';

//TODO: Replace the following with your app's Firebase project configuration
/* const firebaseConfig = {
  //...
}; */

//const app = initializeApp(firebaseConfig);


/* import { myFunction } from './lib/index.js';

myFunction(); */

import { loginTemple } from './lib/login';


const rootSection = document.getElementById('root');

const homeContent = `<h1>Hola</h1>`;
const aboutContent = `<h1>Hola</h1>`;
  

const linkContent = {
  '#home': homeContent,
  '#logout': aboutContent,
};

const routes = {
  '/': homeContent,
  '/logout': aboutContent,
};

//Mostrar HTML correcto al recargar la pagina
const pathname = window.location.pathname;
rootSection.innerHTML = routes[pathname];

//Cambiar ruta en la URL para que no use el '#', ej. '/about'
const changeRoute = (hash) => {
  //cambie la URL para no ocupar el '#'
  if(hash === '#home'){
    window.history.replaceState({}, 'home', '/');
  }else if(hash === '#logout'){
    window.history.replaceState({}, 'logout', '/logout');
  }
}; 

// Cambiar HTML al cliclea links (1):

window.addEventListener('hashchange', () => { 
  //document.getElementById('secinicio').style.display = 'none';
  const hash = window.location.hash;
  rootSection.innerHTML = linkContent[hash];
  changeRoute(hash);
});

window.onpopstate = () => {
  const pathnames = window.location.pathname;
  rootSection.innerHTML = routes[pathnames];
};


/* const btnRegistro = aboutContent.querySelector('#btnRegistro');
  btnRegistro.addEventListener('click', () => {
    document.querySelector('#secinicio').style.display = 'block';
    aboutContent.querySelector('#secformulario').style.display = 'none';
    
    
});   */ 