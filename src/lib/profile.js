/* import { insert } from '../firebase/firebase-fn.js';

export default () => {
  const perfil = document.createElement('section');
  perfil.className = 'perfilSection';
  const prueba = '<h1>Probando Pefil</h1><br><form id="todo-form"><div id="user-info"></div><input
   type="text" id="todo-input" placeholder="¿Qué deseas compartir?" autocomplete="off"/></form>';

  perfil.innerHTML = prueba;
  return perfil;
};
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value;
  if(text != ''){
   addTodo(text);
  })
});
async function addTodo(text) {
  try {
    const todo ={
      id:getUUID(),
      text: text,
      completed: false,
      userid: currentUser.uid,
    }const response =await insert(todo);
  }catch (error) {}
} */
