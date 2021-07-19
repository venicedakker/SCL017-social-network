export default () => {
	const ProfileView = `
    <div class="profile-post">
    <img class="perfil" src="./css/img_app/perfil.jpeg" alt="perfil">
    </div>
    <h1 class="name">Luisa Ortiz</h1>
    <h3 class="ubicacion">Valparaiso Chile</h3>
    <div class="post">post</div>
        `;

    const profile = document.createElement('section');
    profile.innerHTML = ProfileView;
    return profile;
}