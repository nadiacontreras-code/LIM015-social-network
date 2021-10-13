import { getPost } from '../firebase/firebase-fn.js';

export default () => {
  const perfil = document.createElement('section');
  perfil.className = 'perfilSection';
  const prueba = `<h1>Probando Perfil</h1><br><form id="todo-form"><div id="user-info"></div><input
   type="text" id="todo-input" placeholder="¿Qué deseas compartir?" autocomplete="off"/><br>
   <br><button id="btn-OutLog" class="">Compartir</button></form>`;

  perfil.innerHTML = prueba;
  return perfil;
};
