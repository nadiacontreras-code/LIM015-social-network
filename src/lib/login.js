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
export default () => {
  const viewLogin = `
    <form class="form" id="login">
    <h1 class="formTitle">Login</h1>
    <section class="formMesage formMesageError"></section>
    <section class="formInputGroup">
        <input type="text" class="formInput" autofocus placeholder="correo electronico "><br><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
        <input type="password" class="formInput" autofocus placeholder="Contraseña"><br><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <button class="formButton" type="submit">Continue</button>
    <p class="formText">
        <a href="#" class="formLink">Olvidaste tu contraseña?</a>
    </p>
    <p class="formText">
        <a class="formLink" href="#/registrate" id="linkCreateAccount">No tienes una cuenta?<span> Registrate<span></a>
    </p>
</form>`;

  const secElement = document.createElement('section');
  secElement.innerHTML = viewLogin;
  // document.getElementById('container').appendChild(secElement);
  return secElement;
};
