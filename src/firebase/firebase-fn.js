// funcion para cerrar sesion
export function logout() {
  firebase.auth().signOut();
}
/* **********Función para registrar usuario********** */
// eslint-disable-next-line max-len
export const loginUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
/* **********Función para registrar usuario********** */
export const registerUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
/* **********Función para resetear password********** */
/* export const resetPassword = (emailLogin) => firebase.auth()
.sendPasswordResetEmail(emailLogin); */
/* **********Función iniciar sesión con google********** */
export const loginGoogle = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  // eslint-disable-next-line max-len
  const loginwithGoogle = firebase.auth().signInWithPopup(providerGoogle);// popup para seleccionar cuenta google
  return loginwithGoogle;
};
/* **********Función para obtener los posts********** */
export const getPost = () => firebase.firestore().collection('posts').get();

/* **********Función para eliminar los posts********** */
export const deletePost = (id) => firebase.firestore().collection('posts').doc(id).delete();

/* **********Función para obtener el post que queremos editar********** */
export const getPostForEdit = (id) => firebase.firestore().collection('posts').doc(id).get(); // sólo va a obtener el documento con el id que le pasemos

/* **********Función para eliminar los posts********** */
export const updatePost = (id, updatedPost) => firebase.firestore().collection('posts').doc(id).update(updatedPost); // actualizar el post por su id y con el nuevo campo ingresado

/* **********Función para dar like a un post********** */
export const updatelike = (doc, id, value, uid) => firebase.firestore().collection('posts').doc(id).update({ likePost: firebase.firestore.FieldValue.increment(value), array: doc.concat(uid) });

/* **********Función para quitar like a un post********** */
export const updateDislike = (id, value, newArray) => firebase.firestore().collection('posts').doc(id).update({ likePost: firebase.firestore.FieldValue.increment(value), array: newArray });

/* **********Función subir foto de perfil a Storage********** */
export const uploadPhoto = (file) => firebase.storage().ref('/userProfileImg/'.concat(file.name)).put(file);
