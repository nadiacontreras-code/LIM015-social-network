export default () => {
  const viewRegister = `
    <form class="form formHidden" id="createAccount">
    <h1 class="formTitle">Registrate</h1>
    <section class="formMesage formMesageError"></section>
    <section class="formInputGroup">
        <input type="text" id="signupNombre" class="formInput" autofocus="autofocus" placeholder="Nombre"><br><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
        <input type="text" id="signupApellido" class="formInput" autofocus placeholder="Apellido"><br><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
        <input type="text" class="formInput" autofocus placeholder="Correo Electronico"><br><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
        <input type="password" class="formInput" autofocus placeholder="Contraseña"><br><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <section class="formInputGroup">
        <input type="password" class="formInput" autofocus placeholder="Confirmar contraseña"><br><br>
        <section class="formInputErrorMessage"></section>
    </section>
    <button class="formButtonRegister" type="submit">Enviar</button>
    <p class="formText">
        <a class="formLink" href="#/" id="linkLogin">Already have an account? Sign in</a>
    </p>
</form>`;
  const secElement = document.createElement('section');
  secElement.className = 'position'; // mejorar la clase
  secElement.innerHTML = viewRegister;
  // document.getElementById('container').appendChild(secElement);
  return secElement;
};
