import { logout, registerUser } from '../firebase/firebase-fn.js';
import { changeView } from '../spa/route.js';

export default () => {
  const registerSection = document.createElement('section');
  registerSection.className = 'registerSection'; // mejorar la clase

  const viewRegister = `
  <aside class="secLogo">
  <img class="formLogo" src="img/pruebLogo.png" alt="Logo3B" /><br><br>
  <h1>3B la red de personas que buscan lo bueno, bonito y barato de la vida.</h1>
  </aside>
  <section class="registerSecForm">
  <form class="registerAccountForm" id="registerAccount">
    <section class="registerFormTitle">
    <h1 class="formTitle">¡Registrate en 3B!</h1>
    </section>
    <!-- mensaje de error -->
    <section class="formGroup">
      <input type="text" id="registerName" class="formRegister" autofocus="autofocus"
      placeholder="Nombre"><br><br>
      <section class="formRegisterErrorMessage"></section>
    </section>
    <section class="formGroup">
      <input type="text" id="registerLastname" class="formRegister" autofocus
      placeholder="Apellidos"><br><br>
      <section class="formRegisterErrorMessage"></section>
    </section>
    <section class="formGroup">
      <input type="text" id="registerEmail" class="formRegister" autofocus
      placeholder="Correo Electronico"><br><br>
      <section class="formRegisterErrorMessage"></section>    
    <section class="formGroup">
      <input type="password" id="firstPassword" class="formRegister" autofocus
      placeholder="Contraseña"><br><br>
      <section class="formRegisterErrorMessage"></section>
    </section>
    <section class="formGroup">
      <input type="password" id="secondPassword" class="formRegister" autofocus
      placeholder="Confirmar contraseña"><br><br>
    <p id="message"></p>
    </section>
    <section class="formGroup">
    <button id="registerFormBtn" class="formButton" type="button">Registrarse</button><br><br>
    <p class="formText">Ya tienes cuenta?
      <a class="loginLink" href="#/" id="linkLogin"> Inicia Sesión</a>
    </p>

    </section>
  </form>
  </section>`;

  registerSection.innerHTML = viewRegister;





  const btnRegister = registerSection.querySelector('#registerFormBtn');
  const formRegister = registerSection.querySelector('#registerAccount');
  const nameRegister = registerSection.querySelector('#registerName').value;
  const lastnameRegister = registerSection.querySelector('#registerLastname').value;
  const emailRegister = registerSection.querySelector('#registerEmail');
  const passwordRegister = registerSection.querySelector('#firstPassword');
  const confirPassword = registerSection.querySelector('#secondPassword').value;
  const message = registerSection.querySelector('#message');
 
 

  btnRegister.addEventListener('click', () => {

    //Cuando los campos son vacios
    if (emailRegister === '' || passwordRegister === '' || confirPassword === '' || nameRegister === '' || lastnameRegister === '') {
      message.innerHTML = 'Porfavor llene los campos';
    } else if (passwordRegister !== confirPassword) {
      message.innerHTML = 'Las contraseñas no coinciden';
    } else {

        
        registerUser(emailRegister.value.trim(), passwordRegister.value.trim())       
          .then((res) => {
            const user = res.user;
            user.updateProfile({
              displayName: nameRegister,
              displayLastName: lastnameRegister,
            });
            const changeRegister = { url: changeView('#/') };
            user.sendEmailVerification(changeRegister)
              .then(() => {
                alert("Te enviamos un correo de verificación. Revisa tu bandeja de entrada");
              }).catch((error) => {
                console.log(error);
              })
            logout();
            window.location.has = '#/';
          }).catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
              msgErrorRegister.textContent = 'El correo ya esta registrado. Por favor intenta con otro correo.';
            } else {
              msgErrorRegister.textContent = 'Ha ocurrido un error. Intenta otra vez.';
            }

          });
       
        

      }
      console.log(registerUser());
 



});

return registerSection;
};



