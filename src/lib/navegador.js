// import { logOut } from '../firebase/firebase-fn.js';

export default () => {
  const headerMain = document.createElement('header');
  headerMain.className = 'headerMain';
  const headerContent = `
  <section class="headerName">3B </section>
  <nav class="navegador"></nav>
  <ul class="navegadorList">
    <li><button type="button" class="logoutBtn">Cerrar Sesión</button></li>
    <li><a href="#/">perfil</a></li>
    <li><a hidden href="#/home">Muro Principal</a></li>
    <li><a hidden href="#/profile">Perfil</a></li>
    <li><a hidden href="#/lugares">lugares</a></li>
  </ul>
  </nav> `;

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
