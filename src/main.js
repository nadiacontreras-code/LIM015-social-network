// Este es el punto de entrada de tu aplicacion
// import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
/* const firebaseConfig = {
  //...
}; */

// const app = initializeApp(firebaseConfig);

/* import { myFunction } from './lib/index.js';

myFunction(); */
const paginaInicio = document.getElementById('secInicio');

const rootSection = document.getElementById('root');

const homeContent = '<h1>Home</h1>';
const logOutContent = '<h1>Cerrar Sesión</h1>';
const registrationContent = `<section id="registroForm">
                      <div class="div">
                      <span>Registrate</span><br>
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
  '#logout': logOutContent,
  '#registration': registrationContent,
};

const routes = {
  '/': homeContent,
  '/logout': logOutContent,
  '/registration': registrationContent,
};

// Mostrar HTML correcto al recargar la pagina
const pathname = window.location.pathname;
rootSection.innerHTML = routes[pathname];

// Cambiar ruta en la URL para que no use el '#', ej. '/registration'
const changeRoute = (hash) => {
  // cambie la URL para no ocupar el '#'
  /* if (hash === '#home') {
    window.history.replaceState({}, 'home', '/');
  } else if (hash === '#logout') {
    window.history.replaceState({}, 'logout', '/logout');
    paginaInicio.style.display = 'none';
  } */
  switch (hash) {
    case '#home':
      window.history.replaceState({}, 'home', '/');
      paginaInicio.style.display = 'block';
      break;
    case '#logout':
      window.history.replaceState({}, 'logout', '/logout');
      break;
    case '#registration':
      window.history.replaceState({}, 'resgistration', '/registration');
      break;
    default:
      break;
  }
};
// Cambiar HTML al cliclea links (1):

window.addEventListener('hashchange', () => {
  // document.getElementById('secinicio').style.display = 'none';
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
  paginaInicio.style.display = 'none';
  document.getElementById('registroForm').style.display = 'block';
});
