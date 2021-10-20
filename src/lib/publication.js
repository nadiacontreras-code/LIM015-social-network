/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// eslint-disable-next-line import/named
// import { modaldeletePost } from './cerrarSesion.js';
import { getCurrentUser } from '../firebase/firebase-fn.js';
import { getEachPostUser, deletePost, updatePosts } from '../firebase/firestore.js';
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
  /* PARA MOSTRAR LAS PUBLICACIONES HECHAS */
  const getPost = () => {
    const collection = getEachPostUser(uniqueId);
    const publicPost = writeAndReadPost.querySelector('.publicPost');
    collection.onSnapshot((item) => {
      publicPost.innerHTML = '';
      item.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        console.log(doc.data().post);
        const readPostSection = document.createElement('section');
        readPostSection.innerHTML = `
      <!-- SECCION DE  PUBLICACIONES / LO QUE SE POSTEO TODOS-->
      <section id="wallAllPost">
        <section class="eachPost">
          <section id="userWhoPosted">
          <p>${name == null ? email : name}</p>
          </section>
          <section id="userContentPosted">
            <p id='${doc.id}'>${doc.data().post}</p>
            <p id='${doc.id}'>${doc.data().time}</p>
          </section>
          <section id="likeToPost">
          <button type="button" id='${doc.id}' class="btnLike">Like </button>
          <button type="button" id='${doc.id}' class="btnDelete">Delete </button>
          <button type="button" id='${doc.id}' class="btnEdit" >Edit </button>
          <p type="text">0</p>
          </section>
        </section>
      </section>`;

        const btnDelete = readPostSection.querySelector('.btnDelete');
        // eliminar post
        btnDelete.addEventListener('click', () => {
          // eslint-disable-next-line no-alert
          const confirmar = window.confirm('¿Estás seguro de que deseas borrar este post?');
          if (confirmar) {
            deletePost(doc.id);
            console.log(deletePost(doc.id));
          }
        });

        const btnEdit = readPostSection.querySelector('.btnEdit');

        btnEdit.addEventListener('click', () => {
          const idPost = doc.data().uid;
          const publication = writeAndReadPost.querySelector('#contentTextPost');
          // publication.readOnly = false;
          const btnGuardar = writeAndReadPost.querySelector('#compartirPost');
          btnGuardar.innerHTML = 'Guardar';
          publication.value = doc.data().post;
          writeAndReadPost.querySelector('#contentTextPost').innerHTML = publication;

          btnGuardar.addEventListener('click', () => {
            const nuevoText = writeAndReadPost.querySelector('#contentTextPost').value;
            const actualizacionpost = updatePosts(idPost, nuevoText);
            /* .then(() => {
                publication.innerHTML = nuevoText;
              }); */
            return actualizacionpost;
          });
        });

        // editar post
        /*  function editar(id, newpost) {
          // eslint-disable-next-line no-param-reassign
          id = doc.data().uid;
          newpost = writeAndReadPost.querySelector('#contentTextPost');
          newpost.value = doc.data().post;
          const boton = writeAndReadPost.querySelector('#compartirPost');

          boton.addEventListener(() => {
            const collectionPostEdit = firebase().firestore().collection('postPruebaNadia').doc(id);
            const postedit = writeAndReadPost.querySelector('#contentTextPost').value;

            return collectionPostEdit.update({
              id: doc.id,
              post: postedit,
            }).then(() => {
              console.log('Documento editado');
              boton.innerHTML = 'Guardar';
              writeAndReadPost.querySelector('#contentTextPost').value = '';
            }).catch((error) => {
              console.error('Error updating document: ', error);
            });
          });
        }

        btnEdit.addEventListener('click', () => {
          editar();
        }); */
        // console.log(publicPost);
        // publicPost.innerHTML += readPost;
        publicPost.appendChild(readPostSection);
      });
    });
  };
  getPost();

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
        getPost();
      };
      createPost(contentTextPost, photo, email, uniqueId);
      writeAndReadPost.querySelector('#contentTextPost').value = '';
    }
  });

  return writeAndReadPost;
};
