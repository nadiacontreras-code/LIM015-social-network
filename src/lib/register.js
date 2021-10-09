// import { registerUser } from '../firebase/firebase-fn';

export default () => {
  const registerSection = document.createElement('section');
  registerSection.className = 'registerSection'; // mejorar la clase

  const viewRegister = `
  <aside class="secLogo">
  <img class="formLogo" src="img/logo_muñeca.png" alt="Logo3B" /><br><br>
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

    </section>
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

  return registerSection;
};

/* const formRegister = secElement.viewRegister.querySelector('#createAccount')

formRegister.addEventListener('submit', (event) => {
    const emailRegister = document.getElementById('emailRegister').value;
    const passwordRegister = document.getElementById('passwordRegister').value;
    event.preventDefault();
    registesUser(emailRegister.trim(), passwordRegister.trim());
}) */
