/* export const registerUser = (email, password) => {
  // console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user, 20);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};
console.log(registerUser, 15);
console.log('hola'); */
// console.log(registerUser, 28);
/* **********Función para registrar usuario********** */
/* export const registerUser = (email, password) => firebase.auth()
.createUserWithEmailAndPassword(email, password); */

/* **********Función para iniciar sesión********** */
/* export const loginUser = (emailLogin, passwordLogin) => firebase.auth()
.signInWithEmailAndPassword(emailLogin, passwordLogin); */

/* **********Función para resetear password********** */
/* export const resetPassword = (emailLogin) => firebase.auth()
.sendPasswordResetEmail(emailLogin); */

/* **********Función iniciar sesión con google********** */
/* export const loginGoogle = () => {
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const loginwithGoogle = firebase.auth().signInWithPopup(providerGoogle);
return loginwithGoogle;
}; */
