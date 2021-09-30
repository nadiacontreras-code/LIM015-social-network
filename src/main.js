// Este es el punto de entrada de tu aplicacion

// Initialize Firebase

/* import { myFunction } from './lib/index.js';

myFunction(); */

const rootSection = document.getElementById('root');

const homeContent = '<h1>Home</h1>';
const aboutContent = `<section id="secformulario">
                      <div class="div">
                      <span>Registrate</span>
                      <input id="name" type="text" placeholder="Nombre"><br><br>
                      <input id="apellido" type="text" placeholder="Apellido"><br><br>
                      <input id="newEmail" type="email" placeholder="Correo Electronico"><br><br> 
                      <input id="newPassword" type="password" placeholder="Constraseña"><br><br> 
                      <input id="newPassword2" type="password" placeholder="Repetir contraseña"><br><br> 
                      <button id="btnRegistro" type="submit">Enviar</button>
                      </div>
                      </section>`;

const linkContent = {
  '#home': homeContent,
  '#logout': aboutContent,
};

const routes = {
  '/': homeContent,
  '/logout': aboutContent,
};

// Mostrar HTML correcto al recargar la pagina
const pathname = window.location.pathname;
rootSection.innerHTML = routes[pathname];

// Cambiar ruta en la URL para que no use el '#', ej. '/about'
const changeRoute = (hash) => {
  // cambie la URL para no ocupar el '#'
  if (hash === '#home') {
    window.history.replaceState({}, 'home', '/');
  } else if (hash === '#logout') {
    window.history.replaceState({}, 'logout', '/logout');
  }
};

// Cambiar HTML al cliclea links (1):

window.addEventListener('hashchange', () => {
  document.getElementById('secinicio').style.display = 'none';
  const hash = window.location.hash;
  rootSection.innerHTML = linkContent[hash];
  changeRoute(hash);
});

window.onpopstate = () => {
  const pathnames = window.location.pathname;
  rootSection.innerHTML = routes[pathnames];
};

const btnRegistro = document.querySelector('#btnRegistro');
btnRegistro.addEventListener('click', () => {
  document.getElementById('secinicio').style.display = 'block';
});

// Google Login
const googleButton = document.querySelector('#googleLogin');
googleButton.addEventListener('click');
