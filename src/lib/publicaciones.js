export default () => {
  const perfil = document.createElement('section');
  perfil.className = 'perfilSection';
  const prueba = `<article class="miPost"><br><input
   type="text" id="todo-input" placeholder="¿Qué deseas compartir?" autocomplete="off"/><br>
   <br><button class="formButton">Compartir</button></article>`;

  perfil.innerHTML = prueba;
  return perfil;
};
