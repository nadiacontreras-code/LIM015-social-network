/* traerme el window.location.hash cada vez que cambie la vista de
la url para asociarlo con las vistas */
// exporto a MAIN porque en main se esta escuchando el cambio de la url
import { components } from '../lib/componentes.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#':
    case '#/':
      return container.appendChild(components.login());
    case '#/registrate':
      return container.appendChild(components.registro());
    case '#/profile':
      return firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          return container.appendChild(components.navegador())
            && container.appendChild(components.profile())
            && container.appendChild(components.publication());
        }
        // User is signed out
        console.log('ha cerrado sesión');
        return container.appendChild(components.login());
      });

    default:
      return container.appendChild(components.different());
  }
};

export { changeView };
