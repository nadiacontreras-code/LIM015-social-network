
/* const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); */

export const registerUser = (email, password) => {
  // console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user, 20);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};



 /* export const registesUser = (email, password) => {
   firebase
   .auth()
   .createUserWithEmailAndPassword(email, password)
   .then((userCredential) => {
     console.log(userCredential.user);
m })
    .catch((error) => {
      console.log('error', error.message)

    })
 }; */

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





