import { googleLogin } from '../firebase/firebase-fn.js';
/* const loginFirstTime = (user) => {
    if (user.metadata.creationTime === user.metadata.lastSignInTime) {
      window.location.hash = '#/home/profile/editprofile';
    } else {
      window.location.hash = '#/home';
    }
  };
 const redirectGoogle = (container) => {
    const googleBtn = container.querySelector('.googleButton');
    googleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      googleLogin()
        .then((userCredential) => {
          localStorage.setItem('user', JSON.stringify(userCredential.user));
          loginFirstTime(userCredential.user);
        });
    });
  };
  return redirectGoogle;

  export {redirectGoogle} */
