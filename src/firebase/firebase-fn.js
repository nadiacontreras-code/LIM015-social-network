

export const validationEmail = () => firebase.auth().currentUser.sendEmailVerification();


 export const registerUser = (email, password) => firebase.auth()
   .createUserWithEmailAndPassword(email, password);
  
   
export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider(); // Proveedor de google
  return firebase.auth().signInWithPopup(provider); // Popup, modal para selec cuenta google
};



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







