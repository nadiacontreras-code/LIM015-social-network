export default () => {
  const publicar = document.createElement('section');
  publicar.className = 'perfilSection';
  const prueba = `<article class="miPost"><br><textarea
   type="text" id="todo-input" placeholder="¿Qué deseas compartir?" autocomplete="off"/></textarea><br>
   <br><button class="formButton">Compartir</button></article>`;

  publicar.innerHTML = prueba;
  return publicar;
};
