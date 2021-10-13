import { loginUser, loginGoogle, validationEmail } from '../firebase/firebase-fn.js';
// import {loginGoogle, loginUser, validationEmail} from '../firebase/firebase-fn.js';

// console.log(loginUser, 2);
export default () => {
  const loginSection = document.createElement('section');
  loginSection.className = 'loginSection';
  const viewLogin = `

  <aside class="secLogo">
  <img class="formLogo" src="img/logo_muñeca.png" alt="Logo3B" /><br><br>
  <h1>3B la red de personas que buscan lo bueno, bonito y barato de la vida.</h1>
  </aside>
  <form class="loginform" id="login">
    <h1 class="formTitle">Login</h1>
    <section class="loginSecForm">
      <p class="formLoginErrorMessage"></p>
      <section class="formGroup">
        <p class="formLoginErrorMessage"></p>
        <label for="loginEmail" ></label></br>
        <input type="email" id="loginEmail" class="formLogin" autofocus placeholder="correo electronico"><br>
      </section>
      <section class="formGroup">
          <p class="formLoginErrorMessage"></p>
          <label for="loginPassword" ></label></br>
          <input type="password" id="loginPassword" class="formLogin" autofocus placeholder="Contraseña"><br></br>
      </section>
      <p class="formGroup">
        <button id="loginFormBtn" class="formButton" type="button">Iniciar Sesión</button><br><br>
      </p>
      <p class="formLoginErrorMessage"></p>
      <section class="formGoogle">
          <p class="formText"> O bien ingresa con...</p><br>
          <img class="formGoogleImg" src= "img/googleIcono.png" alt="Iniciar sesion Google"/><br>
      </section>
      <section class="formGroup">
          <p class="formText">No tienes una cuenta?
          <a class="formLink" href="#/registrate" id="linkCreateAccount"><span> Registrate<span></a>
          </p>
          </section>
    </section>
  </form>`;

  loginSection.innerHTML = viewLogin;
  // document.getElementById('container').appendChild(secElement);
  const login = loginSection.querySelector('#loginFormBtn');
  login.addEventListener('click', (event) => {
    event.preventDefault();
    const loginEmail = loginSection.querySelector('#loginEmail').value;
    const loginPassword = loginSection.querySelector('#loginPassword').value;
    console.log(loginEmail, loginPassword);
    const errorMessageLogin = loginSection.getElementsByClassName('formLoginErrorMessage');
    function messageError(indice, message) {
      errorMessageLogin[indice].innerHTML = `${message}`;
    }
    loginUser(loginEmail, loginPassword)
      .then((result) => {
        // Signed in
        const user = result.user;
        const displayName = user.multiFactor.user.displayName;
        // console.log(user.multiFactor.user.displayName, 63);

        if (user.emailVerified) {
          // eslint-disable-next-line no-alert
          alert(`Bienvenida ${displayName}`);
          window.location.hash = '#/profile';
        } else {
          messageError(0, 'Por favor realiza la verificación de la cuenta en tu correo electrónico');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        // const errorMessage = error.message;
        console.log('error', error.message, 66);
        // messageError(2, error.message);
        switch (errorCode) {
          case 'auth/wrong-password':
            messageError(1, '');
            messageError(2, 'La contraseña no es válida o el usuario NO esta registrado‎');
            break;
          case 'auth/internal-error':
            messageError(1, '');
            messageError(2, 'Debes ingresar tu contraseña');
            break;
          case 'auth/invalid-email':
            messageError(2, '');
            messageError(1, 'El correo electrónico no tiene el formato válido');
            break;
          case 'auth/email-already-in-use':
            messageError(2, '');
            messageError(1, 'El correo electrónico ya esta registrado y está siendo usado por otra cuenta');
            break;
          case 'auth/user-not-found':
            messageError(2, '');
            messageError(1, 'El correo electrónico y la contraseña NO están registrados');
            break;
          default:
            messageError(0, error.message);
        }
      });
  });

  const btnLoginGoogle = loginSection.querySelector('.formGoogleImg');

  btnLoginGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    loginGoogle().then(() => {
      validationEmail().then(() => {
        // eslint-disable-next-line no-alert
        alert('se envio mensaje de verificacion');
      }).catch((e) => {
        console.log(e);
      });
      window.location.hash = '#/profile';
    }).catch((error) => {
      console.log(error);
    });
  });
  return loginSection;
};
