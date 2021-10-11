// función para logearse con google
const auth = firebase.auth();
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

export const validationEmail = () => firebase.auth().currentUser.sendEmailVerification();


 export const registerUser = (email, password) => firebase.auth()
   .createUserWithEmailAndPassword(email, password);
  
   
export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider(); // Proveedor de google
  return firebase.auth().signInWithPopup(provider); // Popup, modal para selec cuenta google
};


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
/*  export const loginUser = (emailLogin, passwordLogin) => {
   firebase.auth()
.signInWithEmailAndPassword(emailLogin, passwordLogin)
.then((userCredential) => {
  console.log(userCredential);
})
.catch((error) => {
  console.log('error', error.message)
})
console.log(loginUser);
 } 
 */


/* **********Función iniciar sesión con google********** */
/*   export const loginGoogle = () => {
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const loginwithGoogle = firebase.auth().signInWithPopup(providerGoogle);
return loginwithGoogle;
};   */

// función para logearse con google
/* const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

 export async function loginGoogle() {
  try {
    const response = await auth.signInWithPopup(provider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
}  */

//console.log(login());

// funcion para cerrar sesion
/* export function logout() {
  firebase.auth().signOut();
} */



