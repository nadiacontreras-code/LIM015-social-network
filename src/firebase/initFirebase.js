// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXTPdhvmRPgLp66a0-Z9fIQE2ylAWDwng',
  authDomain: 'getbbb-9b521.firebaseapp.com',
  projectId: 'getbbb-9b521',
  storageBucket: 'getbbb-9b521.appspot.com',
  messagingSenderId: '45913824265',
  appId: '1:45913824265:web:c0bdb3536c2081e6b1ecd8',
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const db = firebase.firestore(); // para firestore
// console.log(db);
// eslint-disable-next-line no-unused-vars
/* const pruebaUser = () => {
  const user = firebase.auth().currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log(user);
  } else {
    // No user is signed in.
    console.log('no estas autenticado');
  }
}; */
