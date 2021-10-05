export default () => {
  const viewLogin = `
  <section class= "logoLogin">
  <img class="formLogoImg" src= "img/pruebLogo.png" alt="Logo3B"/><br><br>
  </section>
  <form class="formLogin" id="login">
    <h1 class="formTitle">Login</h1>
    <section class="formMesage formMesageError"></section>
    <section class="formInputGroup">
    <input type="text" class="formInput" autofocus placeholder="correo electronico "><br><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
    <input type="password" class="formInput" autofocus placeholder="Contraseña"><br><br>
        <section class="formInputErrorMessage"></section>
    </section>
        <button class="formButton" type="submit">Iniciar Sesión</button>
        <p class="formText"> O bien ingresa con...</p>

    <section class="formGoogle">
        <img class="formGoogleImg" src= "img/googleIcono.png" alt="Iniciar sesion Google"/><br><br>
    </section>
        <p class="formText">No tienes una cuenta?
        <a class="formLink" href="#/registrate" id="linkCreateAccount"><span> Registrate<span></a>
    </p>
  </form>`;

  const secElement = document.createElement('section');
  secElement.innerHTML = viewLogin;
  // document.getElementById('container').appendChild(secElement);
  return secElement;
};
