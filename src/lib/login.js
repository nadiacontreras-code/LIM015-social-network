//import { signInWithGoogle } from '../firebase/firebase-fn.js';

export default () => {
  const viewLogin = `
  <section class= "logoLogin">
  <img class="formLogoImg" src= "img/logo_muñeca.png" alt="Logo3B"/><br>
  </section>
  <form class="formLogin" id="login">
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
  </form>`;

  const secElement = document.createElement('section');
  secElement.innerHTML = viewLogin;
  // document.getElementById('container').appendChild(secElement);




  const btnLogin = secElement.querySelector('.btnLogin');
  //const emailRegister = document.getElementById('emailLogin');
  //const passwordRegister = document.getElementById('passwordLogin');


  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const emailLogin = secElement.querySelector('#emailLogin').value;
    const passwordLogin = secElement.querySelector('#passwordLogin').value;
    const errorEmailLogin = secElement.querySelector('.errorEmailLogin');
    const errorPasswordLogin = secElement.querySelector('.errorPasswordLogin');

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




    /* loginUser(emailLogin.trim(), passwordLogin.trim());

    console.log(loginUser()); */

  })

  /*  const btnGoogle = secElement.querySelector('.btnGoogleImg');
  btnGoogle.addEventListener('click', () => {
    loginGoogle()
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        //addDataUser(result.user);
        window.location.hash = '#/';
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      })
      console.log(loginGoogle());
   
  });  */

  const buttonLogin = secElement.querySelector('.btnLoginGoogle');
  //const buttonLogout = secElement.querySelector('#btn-OutLog ');
  // let para mantener la variable del usuario logueado
  //let currentUser;
  // metodo para saber si el usuario esta logueado o no
  /*  firebase.auth().onAuthStateChanged((user) => {
     if (user) {
       currentUser = user;
       console.log('Usuario logueado', currentUser.displayName);
     }
   });  */

  /* buttonLogin.addEventListener('click', async (e) => {
    try {
      currentUser = await loginGoogle();
    } catch (error) {
      console.log(e);
    }

  }) */
   buttonLogin.addEventListener('click', () => {
    signInWithGoogle().then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/home';
      return {
        user,
        userEmail: user.email,
      }
    })
  }) 






  return secElement;
};


