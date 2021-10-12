 import {registerUser, validationEmail} from '../firebase/firebase-fn.js';

export default () => {
  const registerSection = document.createElement('section');
  registerSection.className = 'registerSection'; // mejorar la clase

  const viewRegister = `
  <aside class="secLogo">
  <img class="formLogo" src="img/logo_muñeca.png" alt="Logo3B" /><br><br>
  <h1>3B la red de personas que buscan lo bueno, bonito y barato de la vida.</h1>
  </aside>
  <form class="registerAccountForm" id="registerAccount">
    <h1 class="formTitle">¡Registrate en 3B!</h1>
    <p>Los campos obligatorios se marcan con un (*).</p>
    <section class="registerSecForm">
      <p class="formRegisterErrorMessage"></p>
      <section class="formGroup">
        <p class="formRegisterErrorMessage"></p>
        <label for="registerName" >Nombre(s)*</label></br>
        <input type="text" id="registerName" class="formRegister" autofocus="autofocus"
        placeholder="María" ><br><br>
      </section>
      <section class="formGroup">
        <p class="formRegisterErrorMessage"></p>
        <label for ="registerLastname" >Apellidos*</label></br>
        <input type="text" id="registerLastname" class="formRegister"  autofocus
        placeholder="Casas" ><br><br>
      </section>
      <section class="formGroup">
        <p class="formRegisterErrorMessage"></p>
        <label for='registerEmail'>Correo Electrónico *</label></br>
        <input type="email" id="registerEmail" class="formRegister"  autofocus
        placeholder="mariaCasas@hotmail.com"><br><br>
      </section>
      <section class="formGroup">
        <p class="formRegisterErrorMessage"></p>
        <label for ="registerPassword"> Contraseña *</label></br>
        <input type="password" id="registerPassword" class="formRegister" minlength="6"  autofocus
        placeholder="Contraseña"><br><br>
      </section>
      <section class="formGroup">
        <p class="formRegisterErrorMessage"></p>
        <label for ="repeatPassword"> Repite la Contraseña *</label></br>
        <input type="password" id="repeatPassword" class="formRegister"  autofocus
        placeholder="Contraseña"><br><br>
      </section>
      <p class="formGroup">
        <button id="registerFormBtn" class="formButton" type="submit">Registrarse</button><br><br>
      </p>
      <p class="formText">Ya tienes cuenta?
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
    const errorMessageForm = registerSection.getElementsByClassName('formRegisterErrorMessage');
    //  console.log(errorMessage, 64);
    function messageError(indice, message) {
      errorMessageForm[indice].innerHTML = `${message}`;
    }
    // funcion para validar email
    const validarEmail = () =>{
      validationEmail().then(() => {
        alert('se envio mensaje de verificacion');
      }).catch((e) => {
        console.log(e);
      })
    }

    if (registerName === '' || registerLastname === '' || registerEmail === ''
      || registerPassword === '' || repeatPassword === '') {
      messageError(0, 'Debes que llenar todos los campos');
      // console.log(messageError(0, 'Tienes que llenar todos los campos'), 79);
    } else if (registerPassword !== repeatPassword) {
      messageError(0, '');
      messageError(5, 'Las contraseñas NO coinciden');
      // console.log(messageError(5, 'Las contraseñas no coinciden'), 89);
    } else {
       registerUser(registerEmail.trim(), registerPassword.trim())
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.displayName, 20);
            validarEmail();
            window.location.hash = '#/';
            
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
      };

      
     
    
  });
 
  return registerSection;
};
