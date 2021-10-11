//import { signInWithGoogle } from '../firebase/firebase-fn.js';

export default () => {
  const loginSection = document.createElement('section');
  loginSection.className = 'loginSection';
  const viewLogin = `

  <aside class="secLogo">
  <img class="formLogo" src="img/pruebLogo.png" alt="Logo3B" /><br><br>
  <h1>3B la red de personas que buscan lo bueno, bonito y barato de la vida.</h1>
  </aside>
  <section class="loginSecForm">
  <form class="loginform" id="login">
    <section class="loginFormTitle">
    <h1 class="formTitle">Login</h1>
    <section class="formMesage formMesageError"></section>
    <section class="formInputGroup">
    <input type="text" class="formInput"id="emailLogin" autofocus placeholder="correo electronico "><br>
        <section class="errorEmailLogin"></section>
    </section>
    <section class="formInputGroup">
    <input type="password" class="formInput" id="passwordLogin" autofocus placeholder="Contraseña"><br><br>
        <section class="errorPasswordLogin"></section>
    </section>
        <button class="btnLogin" type="submit">Iniciar Sesión</button>
        <p class="formText"> O bien ingresa con...</p>

    <section class="formGoogle">
        <button class="btnLoginGoogle" type="submit">Iniciar Sesión con Google</button>
        <img class="btnGoogleImg" src= "img/googleIcono.png" alt="Iniciar sesion Google"/><br>
    </section>
        <p class="formText">No tienes una cuenta?
        <a class="formLink" href="#/registrate" id="linkCreateAccount"><span> Registrate<span></a>
    </p>
    <section class="formGroup">
  </form>
  </section>`;

  loginSection.innerHTML = viewLogin;
  // document.getElementById('container').appendChild(secElement);

  



  const btnLogin = loginSection.querySelector('.btnGoogleImg');
  //const emailRegister = document.getElementById('emailLogin');
  //const passwordRegister = document.getElementById('passwordLogin');


  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const emailLogin = loginSection.querySelector('#emailLogin').value;
    const passwordLogin = loginSection.querySelector('#passwordLogin').value;
    const errorEmailLogin = loginSection.querySelector('.errorEmailLogin');
    const errorPasswordLogin = loginSection.querySelector('.errorPasswordLogin');

    //Cuando los campos son vacios
    if (emailLogin === '') {
      errorEmailLogin.textContent = 'Ingrese correo electronico';
      errorEmailLogin.style.visibility = 'visible';
    } else {
      errorEmailLogin.style.visibility = 'hidden';
    }
    if (passwordLogin === '') {
      errorPasswordLogin.textContent = 'Este campo es obligatorio';
      errorPasswordLogin.style.visibility = 'visible';
    } else {
      errorPasswordLogin.style.visibility = 'hidden';
    }


  })

 







  return loginSection;
};
