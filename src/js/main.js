// const google = document.getElementById("register-google");
// const form = document.getElementById("formulario-registro-google");

// google.addEventListener('click', () => {
//     form.style.display = 'block';
// });

const googleButton = document.getElementById("login-google");

const provider = new firebase.auth.GoogleAuthProvider();

googleButton.addEventListener('click', (e) => {
    e.preventDefault();

    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log("entro con google");
        }).catch((error) => {
            console.log(error)
        });
});





