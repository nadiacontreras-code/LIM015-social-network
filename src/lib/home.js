export default () => {
  const viewHome = `
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
  secElement.innerHTML = viewHome;

return secElement;
}