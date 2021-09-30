const loginTemple = () => {
    const sectionAllLogin = document.createElement('section');
    const sectionLogin = document.createElement('section');
    sectionAllLogin.className = 'sectionAllLogin';
    sectionLogin.className = 'sectionLogin';
    sectionLogin.innerHTML = `<section id="secinicio">
                                <img id="image" src="img/logo.png.png" width="588px" height="300px">
                                <br>
                                <br>
                                <label id="inicio" >¡Bienvedid@s!</label><br><br>
                                <input id="email" type="email" placeholder="Correo electronico"><br><br>
                                <input id="password" type="password" placeholder="Contraseña">
                                <button id="btnLogin" >Iniciar Sesion</button><br><br>
                                <label>O bien ingresa con...</label><br><br>
                                <img src="img/facebook.png" id="" alt="" width="30px" height="30px">
                                <img src="img/google-mas.png" id="loginGoogle" alt="" width="30px" height="30px"><br><br>
                                <label for="">¿No tienes cuenta?</label>
                                <a href="#logout">Registrate</a>
                              </section> `;
    
    return sectionAllLogin; 
    
    sectionAllLogin.appendChild(sectionLogin);

    sectionAllLogin.innerHTML = sectionLogin;
    const btnLogin = sectionAllLogin.querySelector('#btnLogin');
    const loginGoogle = sectionAllLogin.querySelector('#loginGoogle');

 
  };
  
export { loginTemple };
 