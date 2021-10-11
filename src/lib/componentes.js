/* aqui vamos a crear el objeto que reuna a todos los
 archivos de view para no exportarlas de Una en uno */

import Home from './login.js';
import Registro from './register.js';
import Different from './error404.js';
import Profile from './profile.js';

const components = {
  home: Home,
  registro: Registro,
  different: Different,
  profile: Profile,

};

export { components };
