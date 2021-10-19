import { getCurrentUser } from '../firebase/firebase-fn.js';
import { getEachPostUser } from '../firebase/firestore.js';
// import { createPost, getPost, getCurrentUser } from '../firebase/firebase-fn.js';

export default () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      console.log(uid);
    } else {
      // User is signed out
      console.log('no has iniciado sesión');
    }
  });
  const name = getCurrentUser().name;
  const uniqueId = getCurrentUser().uid;
  const photo = getCurrentUser().photo;
  const email = getCurrentUser().email;
  // console.log(uniqueId);
  // creando seccion de publicar y leer contenido
  const writeAndReadPost = document.createElement('article');
  writeAndReadPost.className = 'userCreateAndReadPost';

  const textToPost = `
  <section class='userPost' >
    <section class="userWhoPost">
      <p>${name == null ? email : name}</p>
    </section>
    <section class="userContentPost">
        <p class='currentUser'>Realiza una Publicación</p>
        <textarea id='contentTextPost'class='postArea' type="text"  maxlength="200" placeholder="Que deseas Compartir hoy ..."></textarea>
        <button type="button" id='compartirPost'>Compartir</button>
        <section class="emojies">
          <img src="" alt="">reaccionLike
        </section>
    </section>
  </section>
  <section class="publicPost"></section>`;

  writeAndReadPost.innerHTML = textToPost;

  const btnCompartir = writeAndReadPost.querySelector('#compartirPost');
  // console.log(btnCompartir);
  btnCompartir.addEventListener('click', (e) => {
    e.preventDefault();
    const contentTextPost = writeAndReadPost.querySelector('#contentTextPost').value;
    console.log(contentTextPost);
    if (contentTextPost === '') {
      // eslint-disable-next-line no-alert
      alert('Por ingrese contenido a su publicación');
    } else {
      const createPost = (postText, photoPost, emailPost, uidPost) => {
        // createPost(contentTextPost, photo, email, uniqueId)
        const db = firebase.firestore();
        db.collection('postPruebaNadia').doc().set({
          post: postText,
          time: firebase.firestore.FieldValue.serverTimestamp(),
          photo: photoPost,
          email: emailPost,
          uid: uidPost,
        })
          .then(() => {
            console.log('publicacion exitosa');
          })
          .catch((error) => {
            console.error(`Error creando el post => ${error}`);
          });
      };
      createPost(contentTextPost, photo, email, uniqueId);
      writeAndReadPost.querySelector('#contentTextPost').value = '';
    }
  });

  /* PARA MOSTRAR LAS PUBLICACIONES HECHAS */

  getEachPostUser(uniqueId).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
      console.log(doc.data().post);
      /* getPost(uniqueId).onSnapShot((querySnapshot) => {
      querySnapshot.forEach((post) => { */
      const readPost = `
            <!-- SECCION DE  PUBLICACIONES / LO QUE SE POSTEO TODOS-->
            <section id="wallAllPost">
              <section class="eachPost">
                <section id="userWhoPosted">
                <p>${name == null ? email : name}</p>
              </section>
              <section id="userContentPosted">
                <p id='${doc.id}'>${doc.data().post}</p>
              </section>
              <section id="likeToPost">
              <button type="button" id='${doc.id}' class="btnLike">Like </button>
              <p type="text">0</p>
              </section>
            </section>
          </section>`;
      const publicPost = writeAndReadPost.querySelector('.publicPost');
      // console.log(publicPost);
      publicPost.innerHTML += readPost;
    });
  })
    .catch((error) => {
      console.log('Error: ', error);
    });
  // });
  return writeAndReadPost;
};
