// import { getPosts, updateUser, uploadImag } from '../firebase/firebaseStore.js';

// import { getUser } from '../firebase/firebase-fn.js';

/* export default () => {
// const user = firebase.auth().currentUser;
  const profileview = document.createElement('section');
  profileview.className = 'perfilSection';
  const prueba = `<section id="userProfile">
                    <div id="photoPortada">
                      <img id="imgPortada" src="img/lago.jpg" alt="foto-portada">
                    </div>
                    <div class="photoProfile">
                      <img src = "${userData.profilePhoto}">
                      <img class="photo" src="img/chica.jpg"></img>
                      <div class="imageContain"><img src="${userData.profilePhoto}" alt=""></div>
                      <div class="userInfo">
                        <a class="profileTitle" title="">${userData.name}</a>
                        <p class="username1">Juan Perez </p>
                      </div>
                    </div>
                  </section>
                  <div>
                      <label id="select-profile" for="select-photo-profile">
                      <input type="file" id="select-photo-profile" class="inputUploadPhoto hide"
                       accept="image/jpeg, image/png">
                      <span class="edit-photo"><i class="fas fa-camera edit-photo-btn"></i></span>
                      <button id="subirfoto" class="btnUploadPhoto button" style="display: none;">
                      Subir foto</button>
                    </label>
                  </div>
                  </section> `;

  profileview.innerHTML = prueba;
  // const profile = profileview.querySelector('#userProfile');
  getUser()
  return profileview;
};
*/

import { getCurrentUser } from '../firebase/firebase-fn.js';
import Publication from './publication.js';
// console.log(templatePost());
import { addDocPost, listPostAll, uploadFile } from '../firebase/firebaseStore.js';

export default () => {
  const photo = getCurrentUser().photo;
  const name = getCurrentUser().name;
  const viewFeed = `
    <main id="feedSection">
  
      <article id="user-info">
              <img class="userImage" src="${photo === null ? '../images/User.svg' : photo}" alt="Foto de perfil">
              <h2 class="user-name profile-name" id="nameUserProfile">${name}</h2>
              <article class="user-information">
                  <textarea placeholder="Cuéntanos sobre ti..." class="aboutMe"></textarea>
              </article>
      </article>
      <section class="aditional">
      </section>
      <form class="formPost">
          <img class="userPhotoFeed" src="${photo === null ? '../images/User.svg' : photo}" alt="userPhoto">
          <textarea placeholder="¿En qué estás pensando?" id="post"></textarea><hr>
          <button id="bttPost" type="submit">Publicar</button>
          <article class="image-upload">
          <label for="file-input">
          <img src= "../images/photo.png" id="uploadPhoto">
          </label>
          
      </form>
      
      <div id="loading" class="loading hidden">
      <img src="../images/loadingspin.gif"/>
      </div>
      
     </form>
     <input type="file" id="file-input" accept="*" />
     </article>
      
      <section id="activitiesArea">
      <h3 id="activitiesTitle"> ACTIVIDADES </h3>
      </section>
      <div id="wall">
      </div>
    </main>
    `;

  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'feed');
  divElement.innerHTML = viewFeed;

  /* const userLogOut = divElement.querySelector('#login');
  userLogOut.addEventListener('click', () => {
    logOut()
      .then(() => {
        window.location.hash = '#/';
      }).catch((error) => {
        console.log(error);
      });
  }); */

  // FIRESTORE
  // const docRef = firestore.collection('posts');
  const buttonPost = divElement.querySelector('#bttPost');
  const wallArea = divElement.querySelector('#wall');
  // renderizar posts en wall
  listPostAll((data) => {
    // console.log(data); trae la data del documento con sus fields.
    wallArea.innerHTML = '';
    data.forEach((post) => {
      /* console.log(post); */
      wallArea.appendChild(Publication(post));
    });
    return wallArea;
  });

  const hiddenLoading = () => {
    const loading = divElement.querySelector('#loading');
    loading.classList.remove('show');
    loading.classList.add('hidden');
  };
  const showLoading = () => {
    const loading = divElement.querySelector('#loading');
    loading.classList.remove('hidden');
    loading.classList.add('show');
  };

  buttonPost.addEventListener('click', (e) => {
    e.preventDefault();// para evitar que los datos no aparezcan cuando se refresque
    // si el textarea está vacío, no guardar algo
    const textarea = divElement.querySelector('#post').value;
    const textareaEmpty = divElement.querySelector('#post');
    const inputFile = divElement.querySelector('#file-input').files;
    const inputFileEmpty = divElement.querySelector('#file-input');
    showLoading();

    // fx firestorage
    if (textarea.length > 0 || inputFile.length >= 1) {
      if (inputFile.length >= 1) {
        showLoading();
        // console.log(inputFile);
        const fileName = inputFile[0].name;
        // console.log(fileName);
        uploadFile(`img/${fileName}`, inputFile[0]).then((snapshot) => {
          // console.log('Archivo Subido');
          snapshot.ref.getDownloadURL().then((url) => {
            // console.log('Url :', url);
            addDocPost(
              textarea,
              getCurrentUser().uid,
              getCurrentUser().name,
              getCurrentUser().photo,
              new Date().toLocaleString(),
              url,
              [],
            )
              .then(() => { hiddenLoading(); textareaEmpty.value = ''; inputFileEmpty.value = ''; });
          });
        });
      } else {
        addDocPost(textarea,
          getCurrentUser().uid,
          getCurrentUser().name,
          getCurrentUser().photo,
          new Date().toLocaleString(),
          null,
          [])
          .then(() => { hiddenLoading(); textareaEmpty.value = ''; inputFileEmpty.value = ''; });
      }
    }
  });

  return divElement;
};
