export default () => {
  const viewProfile = `
  <section class="logoForm">
  <img class="formLogoImg" src= "img/logo_muñeca.png" alt="Logo3B"/><br><br>
  </section>`;

const secElement = document.createElement('section');
  secElement.className = 'position'; // mejorar la clase
  secElement.innerHTML = viewProfile;

return secElement;
}