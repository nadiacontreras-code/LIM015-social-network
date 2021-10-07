//import {registerUser} from '../firebase/firebase-fn.js';

export default () => {
  const viewLogin = `
  <section class= "logoLogin">
  <img class="formLogoImg" src= "img/logo_muñeca.png" alt="Logo3B"/><br>
  </section>
  <form class="formLogin" id="login">
    <h1 class="formTitle">Login</h1>
    <section class="formMesage formMesageError"></section>
    <section class="formInputGroup">
    <input type="text" class="formInput" autofocus placeholder="correo electronico "><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
    <input type="password" class="formInput" autofocus placeholder="Contraseña"><br><br>
        <section class="formInputErrorMessage"></section>
    </section>
        <button class="btnRegistro" type="submit">Iniciar Sesión</button>
        <p class="formText"> O bien ingresa con...</p>

    <section class="formGoogle">
        <img class="formGoogleImg" src= "img/googleIcono.png" alt="Iniciar sesion Google"/><br>
    </section>
        <p class="formText">No tienes una cuenta?
        <a class="formLink" href="#/registrate" id="linkCreateAccount"><span> Registrate<span></a>
    </p>
  </form>`;

  const secElement = document.createElement('section');
  secElement.innerHTML = viewLogin;
  // document.getElementById('container').appendChild(secElement);
  return secElement;
 


 /*   const btnRegistro = secElement.querySelector('.btnRegistro');
   const emailRegister = document.getElementById('emailRegister');
   const passwordRegister = document.getElementById('passwordRegister');


    btnRegistro.addEventListener('click', (event) => {       
        event.preventDefault();
        registerUser(emailRegister.value.trim(), passwordRegister.value.trim());
        console.log(emailRegister,passwordRegister);

    })  */



};


