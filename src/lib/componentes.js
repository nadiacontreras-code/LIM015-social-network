/* aqui vamos a crear el objeto que reuna a todos los
 archivos de view para no exportarlas de Una en uno */

import Login from './login.js';
import Registro from './register.js';
import Home from './home.js';
import Profile from './profile.js';
import Different from './error404.js';
import Profile from './profile.js';

const components = {
  login: Login,
  registro: Registro,
  home : Home,  
  profile: Profile,
  different: Different,
  profile: Profile,

};

export { components };
