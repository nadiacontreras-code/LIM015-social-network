export default () => {
  const profileview = document.createElement('section');
  profileview.className = 'perfilSection';
  const prueba = `<section class="userProfile">
                  <div id="photoPortada">                      
                          <img id="imgPortada" src="img/lago.jpg" alt="foto-portada">                                          
                  </div><br> 
                  <div class="photoProfile">
                    <img class="photo" src="img/chica.jpg"></img> 
                  </div>
                  <div>                    
                    <label id="select-profile" for="select-photo-profile">
                      <input type="file" id="select-photo-profile" class="inputUploadPhoto hide" accept="image/jpeg, image/png">                      
                      <button id="subirfoto" class ="btnUploadPhoto button" style="display: none;">Subir foto</button>
                    </label>
                  </div>
                  <div class="user info">
                    <p>Nombre Apellido</p>
                  </div>
                </section>        
                </section> `;

  profileview.innerHTML = prueba;
  return profileview;
};
