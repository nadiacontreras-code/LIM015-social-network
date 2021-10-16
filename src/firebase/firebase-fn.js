export const validationEmail = () => firebase.auth().currentUser.sendEmailVerification();

/* **********Función para registrar usuario********** */
// eslint-disable-next-line max-len
export const loginUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

/* ********Función para saber estado del usuario************* */
export const getUserInfo = () => {
  const currentUser = firebase.auth().currentUser;

  // Obtener la info del usuario
  const uid = currentUser.uid;
  const name = currentUser.displayName;
  const email = currentUser.email;
  const photo = currentUser.photoURL;

  // Guardar la info en localStorage
  localStorage.setItem('uid', uid);
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('photo', photo);
  console.log(name, email, photo);
};
/* **********Función para registrar usuario********** */
export const registerUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

/* **********Función iniciar sesión con google********** */
export const loginGoogle = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  const loginwithGoogle = firebase.auth()
    .signInWithPopup(providerGoogle);// popup para seleccionar cuenta google
  return loginwithGoogle;
};
export const logOut = () => {
  firebase.auth().signOut();
};

/** *****Para subir imagen************************** */
export const uploadImage = (imgFile, directory) => {
  const storageRef = firebase.storage().ref(`${directory}/${imgFile.name}`);
  return storageRef.put(imgFile);
};
