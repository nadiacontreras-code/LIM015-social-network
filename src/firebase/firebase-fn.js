// función para logearse con google
/* const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export async function login() {
  try {
    const response = await auth.signInWithPopup(provider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
}
*/
const db = firebase.firestore();

export async function insert(item) {
  try {
    const response = await db.collection('todos').add(item);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
// funcion para cerrar sesion
export function logout() {
  firebase.auth().signOut();
}

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
/* **********Función para registrar usuario********** */
// eslint-disable-next-line max-len
export const loginUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

/* **********Función para registrar usuario********** */
export const registerUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

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

/* **********Función para iniciar sesión********** */
/* export const loginUser = (emailLogin, passwordLogin) => firebase.auth()
.signInWithEmailAndPassword(emailLogin, passwordLogin); */

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
