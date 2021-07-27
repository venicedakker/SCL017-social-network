import firebaseFunctions from '../firebase-functions.js';

export default () => {
  const profileView = `
    <div class="profile-post">
    <a href="#/feed" id="profile" class="button" >Feed</a>
    <a href="" id="logout-btn" class="button">LOGOUT</a>
    <img class="perfil" src="./css/img_app/perfil.jpeg" alt="perfil">
    </div>
    <h1 class="name">Luisa Ortiz</h1>
    <h3 class="ubicacion">Valparaiso Chile</h3>
    <div class="post">post</div>
        `;

  const profile = document.createElement('section');
  profile.innerHTML = profileView;
  const logoutButton = profile.querySelector('#logout-btn');
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    firebaseFunctions.logoutAccount();
  });

  return profile;
};
