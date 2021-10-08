import { registerUser, validationEmail } from '../firebase/firebase-fn.js';
export default () => {
  const viewRegister = `
  <section class="logoForm">
  <img class="formLogoImg" src= "img/logo_muñeca.png" alt="Logo3B"/><br><br>
  </section>
    <form class="form formHidden" id="createAccount">
    <h1 class="formTitle">¡Registrate en Get3B!</h1>
    <section class="formMesage formMesageError"></section>
    <section class="formInputGroup">
        <input type="text" id="signupNombre" class="formInput" autofocus="autofocus" placeholder="Nombre"><br><br>
        <section class="messagename"></section>
    </section>
    <section class="formInputGroup">
        <input type="text" id="signupApellido" class="formInput" autofocus placeholder="Apellido"><br><br>
        <section class="messageape"></section>
    </section>
    <section class="formInputGroup">
        <input type="text" class="formInput" id="emailRegister" autofocus placeholder="Correo Electronico"><br><br>
        <section class="messageemail"></section>
    </section>
    <section class="formInputGroup">
        <input type="password" class="formInput" id="passwordRegister" autofocus placeholder="Contraseña"><br><br>
        <section class="messagepassword"></section>
    </section>
    <section class="formInputGroup">
        <input type="password" class="formInput" id="confirPassword" autofocus placeholder="Confirmar contraseña"><br><br>
        <section class="message"></section>
    </section>
    <button class="btnRegister" type="submit">Registrarse</button>
    <p class="formText">Ya tienes cuenta?
        <a class="formLink" href="#/" id="linkLogin"> Inicia Sesión</a>
    </p>
</form>`;
  const secElement = document.createElement('section');
  secElement.className = 'position'; // mejorar la clase
  secElement.innerHTML = viewRegister;
  // document.getElementById('container').appendChild(secElement);
  

 


const btnRegister = secElement.querySelector('.btnRegister');

btnRegister.addEventListener('click', (event) => {
    const emailRegister = document.getElementById('emailRegister').value;
    const passwordRegister = document.getElementById('passwordRegister').value;
    const confirPassword = secElement.querySelector('#confirPassword').value;
    const message= secElement.querySelector('.message');    
    event.preventDefault();
    event.stopPropagation();
    message.innerHTML = '';
    ;

     //Cuando los campos son vacios
     if (emailRegister === '' || passwordRegister === '' || confirPassword === '') {
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