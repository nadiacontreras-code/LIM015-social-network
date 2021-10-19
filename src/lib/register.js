import { registerUser, validationEmail } from '../firebase/firebase-fn.js';
import { catchUserInfo } from '../firebase/firestore.js';

export default () => {
  const registerSection = document.createElement('section');
  registerSection.className = 'registerSection'; // mejorar la clase

  const viewRegister = `
  <section class="secLogoRegister">
    <img class="registerLogo" src="img/logo_muñeca.png" alt="Logo3B" /><br><br>  
  </section>
  <form class="registerForm" id="registerAccount">
    <h1>¡Registrate en 3B!</h1><br>
    <p class="registerText">Los campos obligatorios se marcan con un (*).</p>
    <section class="registerSecForm">
      <p class="registerErrorMessage"></p>
      <section class="inputGroupRegister">
        <p class="registerErrorMessage"></p>
        <label for="registerName" >Nombre(s)*</label>
        <input type="text" id="registerName" class="formRegister" autofocus="autofocus"
        placeholder="María" >
     
        <p class="registerErrorMessage"></p>
        <label for ="registerLastname" >Apellidos*</label>
        <input type="text" id="registerLastname" class="formRegister"  autofocus
        placeholder="Casas" >
     
        <p class="registerErrorMessage"></p>
        <label for='registerEmail'>Correo Electrónico *</label>
        <input type="email" id="registerEmail" class="formRegister"  autofocus
        placeholder="mariaCasas@hotmail.com">
     
        <p class="registerErrorMessage"></p>
        <label for ="registerPassword"> Contraseña *</label>
        <input type="password" id="registerPassword" class="formRegister" minlength="6"  autofocus
        placeholder="Contraseña">
      
        <p class="registerErrorMessage"></p>
        <label for ="repeatPassword"> Repite la Contraseña *</label>
        <input type="password" id="repeatPassword" class="formRegister"  autofocus
        placeholder="Contraseña">
      </section>
      <p class="registerButton">
        <button id="registerFormBtn" class="allButtonRegister" type="submit">Registrarse</button>
      </p>
      <p class="registerText">Ya tienes cuenta?
        <a class="loginLink" href="#/" id="linkLogin"> Inicia Sesión</a>
      </p>
    </section>
  </form>`;

  registerSection.innerHTML = viewRegister;

  // const registerFormBtn = registerSection.querySelector('#registerFormBtn');
  const registerAccount = registerSection.querySelector('#registerAccount');

  registerAccount.addEventListener('submit', (event) => {
    event.preventDefault();
    const registerName = registerSection.querySelector('#registerName').value;
    const registerLastname = registerSection.querySelector('#registerLastname').value;
    const registerEmail = registerSection.querySelector('#registerEmail').value;
    const registerPassword = registerSection.querySelector('#registerPassword').value;
    const repeatPassword = registerSection.querySelector('#repeatPassword').value;
    const errorMessageForm = registerSection.getElementsByClassName('registerErrorMessage');
    //  console.log(errorMessage, 64);
    function messageError(indice, message) {
      errorMessageForm[indice].innerHTML = `${message}`;
    }
    // funcion para validar email
    const validarEmail = () => {
      validationEmail().then(() => {
        // eslint-disable-next-line no-alert
        alert('se envio mensaje de verificacion a su correo electrónico');
      }).catch((e) => {
        console.log(e);
      });
    };

    if (registerName === '' || registerLastname === '' || registerEmail === ''
      || registerPassword === '' || repeatPassword === '') {
      messageError(0, 'Debes que llenar todos los campos');
      // console.log(messageError(0, 'Tienes que llenar todos los campos'), 79);
    } else if (registerPassword !== repeatPassword) {
      messageError(0, '');
      messageError(5, 'Las contraseñas NO coinciden');
      // console.log(messageError(5, 'Las contraseñas no coinciden'), 89);
    } else {
      registerUser(registerEmail, registerPassword)
        .then((result) => {
          // Signed in
          // console.log(result.user.multiFactor.user);
          const uniqueId = result.user.multiFactor.user.uid;
          // console.log(result.user.multiFactor.user.uid);
          /* const emailVerified = result.user.multiFactor.user.emailVerified;
           console.log(emailVerified); */
          validarEmail();
          window.location.hash = '#/';
          catchUserInfo(registerName, registerLastname, registerEmail, uniqueId);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log('error', error.message);
          switch (errorCode) {
            case 'auth/email-already-in-use':
              messageError(3, 'El correo electrónico ya está registrado');
              break;
            case 'auth/invalid-email':
              messageError(3, 'Correo electrónico no válido');
              break;
            default:
              messageError(0, error.message);
          }
        });
    }
  });
  return registerSection;
};
