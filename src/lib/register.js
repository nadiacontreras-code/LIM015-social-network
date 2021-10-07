import { registerUser } from '../firebase/firebase-fn';

export default () => {
  const viewRegister = `
  <section class="secLogoLogin">
  <img class="secLogoImg" src= "img/pruebLogo.png" alt="Logo3B"/><br><br>
  </section>
    <form class="formFormHidden" id="createAccount">
    <h1 class="formTitle">¡Registrate en Get3B!</h1>
    <section class="formMesage formMesageError"></section>
    <section class="formInputGroup">
        <input type="text" id="signupNombre" class="formInput" autofocus="autofocus" placeholder="Nombre"><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
        <input type="text" id="signupApellido" class="formInput" autofocus placeholder="Apellidos"><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
        <input type="text" class="formInput" autofocus placeholder="Correo Electronico"><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
        <input type="password" id ="firstPassword" class="formInput" autofocus placeholder="Contraseña"><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
        <input type="password"id ="secondPassword" class="formInput" autofocus placeholder="Confirmar contraseña"><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <button class="formButtonRegister" type="submit">Registrarse</button>
    <p class="formText">Ya tienes cuenta?
        <a class="formLink" href="#/" id="linkLogin"> Inicia Sesión</a>
    </p>
</form>`;
  const secElement = document.createElement('section');
  secElement.className = 'position'; // mejorar la clase
  secElement.innerHTML = viewRegister;
  // document.getElementById('container').appendChild(secElement);
  // return secElement;

  const createAccount = secElement.getElementById('createAccount');
  createAccount.addEventListener('submit', (e) => {
    e.preventDefault();
    // trayendo info del usuario para
    const emailRegister = createAccount.getElementById('signupNombre').value;
    const passwordRegister = createAccount.getElementById('firstPassword').value;
    /*  if (createAccount['firstPassword'].value == createAccount['SecondPassword'].value){
     password.push(createAccount['formInput'].value);
 }else{
   const messageError = createAccount['.formInputErrorMessage'];
   messageError.innerHTML = " Tus contraseñas no coinciden";
   password.push(messageError);
 } */
    registerUser(emailRegister, passwordRegister)
  });
};
