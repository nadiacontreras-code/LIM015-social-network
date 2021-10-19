import { getCurrentUser } from '../firebase/firebase-fn.js';

export default () => {
  const photo = getCurrentUser().photo;
  const name = getCurrentUser().name;
  const viewFeed = `
    <main id="feedSection">
  
      <article id="user-info">
              <img class="userImage" src="${photo === null ? '../img/chica.jpg' : photo}" width= "120" alt="Foto de perfil">
              <h2 class="user-name profile-name" id="nameUserProfile">${name}</h2>
          <article class="user-information">
              <textarea placeholder="Cuéntanos sobre ti..." id="post"></textarea>
          </article>
      </article>
      <form class="formPost">
          <img class="userPhotoFeed" src="${photo === null ? '../img/chica.jpg' : photo}" width= "80" alt="userPhoto">
          <h2 class="user-name profile-name" id="nameUserProfile">${name}</h2>
      </form>
    </main>
    `;

  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'feed');
  divElement.innerHTML = viewFeed;

  return divElement;
};
