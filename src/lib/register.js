import { registerUser, validationEmail } from '../firebase/firebase-fn.js';
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
    <section class="formRegisterErrorMessage"></section>
    </section>
    <section class="formGroup">
    <button id="registerFormBtn" class="formButton" type="submit">Registrarse</button><br><br>
    <p class="formText">Ya tienes cuenta?
      <a class="loginLink" href="#/" id="linkLogin"> Inicia Sesión</a>
    </p>

    </section>
  </form>
  </section>`;

  registerSection.innerHTML = viewRegister;
  

 


const btnRegister = registerSection.querySelector('.registerFormBtn');

btnRegister.addEventListener('click', (event) => {
    const nameRegister = registerSection.querySelector('#registerName').value;
    const lastnameRegister = registerSection.querySelector('#registerLastname')
    const emailRegister = registerSection.querySelector('#registerEmail').value;
    const passwordRegister = registerSection.querySelector('#firstPassword').value;
    const confirPassword = registerSection.querySelector('#secondPassword').value;
    const message= secElement.querySelector('.message');    
    event.preventDefault();
    event.stopPropagation();
    message.innerHTML = '';
    ;

     //Cuando los campos son vacios
     if (emailRegister === '' || passwordRegister === '' || confirPassword === '' || nameRegister === '' || lastnameRegister === '') {
      message.innerHTML = 'Porfavor llene los campos'; 
    } else  if (passwordRegister !== confirPassword) {
      message.innerHTML = 'Las contraseñas no coinciden';
    } else {
      registerUser(emailRegister.trim(), passwordRegister.trim())
      .then((response) => {
        validationEmail();
        sessionStorage.setItem('nameRegister', emailRegister);
        window.location.hash = '#/';
        window.alert('mensaje de verificación enviado');
      })
      .catch((error) => {
        //console.log(error);
        const errorCode = error.code;
        if(errorCode === 'auth/email-already-in-use'){
          message.innerHTML = 'El correo electronico ya esta registrado';
        } else if(errorCode === 'auth/invalid-email'){
          message.innerHTML = 'Correo electronico no valido';
        } else if(errorCode === 'auth/weak-password'){
          message.innerHTML = 'La contraseña debe tern minimo 6 caracteres';
        }

      })
      
    }


    
}) 

return secElement;
};




