export const validationEmail = () => firebase.auth().currentUser.sendEmailVerification();

/* **********Función para registrar usuario********** */
// eslint-disable-next-line max-len
export const loginUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

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

// -------- FUNCIÓN QUE CONTIENE INFORMACIÓN EN UN OBJETO DEL CURRENT USER --------//
export const getCurrentUser = () => {
  const user = firebase.auth().currentUser;
  let dataUser = '';
  if (user != null) {
    dataUser = {
      name: user.displayName,
      photo: user.photoURL,
      uid: user.uid,
    };
  }
  /* console.log(dataUser); */
  return dataUser;
};

export const userSessionActive = (callback) => firebase.auth().onAuthStateChanged(callback);

/** *****Para subir imagen************************** */
export const uploadImage = (imgFile, directory) => {
  const storageRef = firebase.storage().ref(`${directory}/${imgFile.name}`);
  return storageRef.put(imgFile);
};
