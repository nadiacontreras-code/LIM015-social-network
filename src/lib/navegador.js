// import { logOut } from '../firebase/firebase-fn.js';

export default () => {
  const headerMain = document.createElement('header');
  headerMain.className = 'headerMain';
  const headerContent = `
  <!--<header creado-->
  <nav class="navegador">
    <ul class="navegadorList">
      <li><a href="#/profile">perfil</a></li>
      <li>3B</li>
      <li><button type="button" class="logoutBtn">Cerrar Sesión</button></li>
    </ul>
  </nav>
 <!-- </header>--> `;

  headerMain.innerHTML = headerContent;

  // cerrar sesión
  const logOutBtn = headerMain.querySelector('.logoutBtn');
  // console.log(logOutBtn);
  logOutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(10);
    const logOut = () => {
      firebase.auth().signOut()
        // logOut()
        .then(() => {
          console.log('el usuario ha cerrado sesión');
          window.location.hash = '#/';
        }).catch((error) => {
          console.log(error.message, 29);
        });
    };
    logOut();
  });

  return headerMain;
};
