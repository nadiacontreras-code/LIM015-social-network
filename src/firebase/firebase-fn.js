/* **********Función para registrar usuario********** */
export const registerUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
/* const registerUser = (email, password) => {
  // console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password);
}; */
export const loginUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};
/* **********Función para resetear password********** */
/* export const resetPassword = (emailLogin) => firebase.auth()
.sendPasswordResetEmail(emailLogin); */

/* **********Función iniciar sesión con google********** */
/* export const loginGoogle = () => {
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const loginwithGoogle = firebase.auth().signInWithPopup(providerGoogle);
return loginwithGoogle;
}; */
