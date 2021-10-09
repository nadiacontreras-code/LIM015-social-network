// import {registerUser} from '../firebase/firebase-fn.js';

export default () => {
  const loginSection = document.createElement('section');
  loginSection.className = 'loginSection';
  const viewLogin = `

  <aside class="secLogo">
  <img class="formLogo" src="img/logo_muñeca.png" alt="Logo3B" /><br><br>
  <h1>3B la red de personas que buscan lo bueno, bonito y barato de la vida.</h1>
  </aside>
  <section class="loginSecForm">
  <form class="loginform" id="login">
    <section class="loginFormTitle">
    <h1 class="formTitle">Login</h1>

    </section>
    <section class="formGroup">
    <input type="text" class="formLogin" autofocus placeholder="correo electronico "><br>
        <section class="formLoginErrorMessage"></section>
    </section>

    <section class="formGroup">
        <input type="password" class="formLogin" autofocus placeholder="Contraseña"><br>
        <section class="formLoginErrorMessage"></section>
    </section>
    <section class="formGroup">
        <button id="loginFormBtn" class="formButton" type="submit">Iniciar Sesión</button><br><br>
        <p class="formText"> O bien ingresa con...</p><br>

    <section class="formGoogle">
        <img class="formGoogleImg" src= "img/googleIcono.png" alt="Iniciar sesion Google"/><br>
    </section>
        <p class="formText">No tienes una cuenta?
        <a class="formLink" href="#/registrate" id="linkCreateAccount"><span> Registrate<span></a>
    </p>
    <section class="formGroup">
  </form>
  </section>`;

  loginSection.innerHTML = viewLogin;
  // document.getElementById('container').appendChild(secElement);

  return loginSection;

  /*   const btnRegistro = secElement.querySelector('.btnRegistro');
    const emailRegister = document.getElementById('emailRegister');
    const passwordRegister = document.getElementById('passwordRegister');
    btnRegistro.addEventListener('click', (event) => {
      event.preventDefault();
      registerUser(emailRegister.value.trim(), passwordRegister.value.trim());
      console.log(emailRegister,passwordRegister);
    })  */
};
