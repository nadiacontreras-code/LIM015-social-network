import { getUserInfo } from '../firebase/firebase-fn.js';

export default () => {
  const profileview = document.createElement('section');
  profileview.className = 'perfilSection';
  const prueba = `<section class="userProfile">
                    <div id="photoPortada">
                      <img id="imgPortada" src="img/lago.jpg" alt="foto-portada">
                    </div>
                    <div class="photoProfile">
                      <img class="photo" src="img/chica.jpg"></img>
                      <div class="userInfo">
                        <p class="username1">Juan Perez aaaaaaaaa</p>
                        <p class="username1">Juan Perez</p>
                        <p class="username1">Juan Perez</p>
                      </div>
                    </div>
                  </section>

                  <div>
                    
                    <label id="select-profile" for="select-photo-profile">
                      <input type="file" id="select-photo-profile" class="inputUploadPhoto hide" accept="image/jpeg, image/png">
                      <span class="edit-photo"><i class="fas fa-camera edit-photo-btn"></i></span>
                      <button id="subirfoto" class="btnUploadPhoto button" style="display: none;">Subir foto</button>
                    </label>
                  </div>             

                  </section> `;

  profileview.innerHTML = prueba;

  const profile = profileview.querySelector('#userInfo');
  console.log(profile);
  /* function init() {
    profile.innerHTML = `<img src = "${getUserInfo()}" `;
  } */
  /* .then((result) => {
      // Signed in
        const user = result.user;
        console.log(user);
        const displayName = user.multiFactor.user.displayName;
        console.log(user.multiFactor.user.displayName, 63);
        if (user.emailVerified) {
        // eslint-disable-next-line no-alert
          alert(`Bienvenida ${displayName}`);
          window.location.hash = '#/profile';
          getUserInfo();
        } else { console.log(event); }
      });
  }); */
  return profileview;
};
