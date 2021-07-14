// Move to register or login
const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const loginContent = document.getElementById("login-content");
const registerContent = document.getElementById("register-content");
const landingContent = document.getElementById("landing");
const navContent = document.getElementById("botones");

loginBtn.addEventListener('click', () => {
    loginContent.style.display = "block";
    registerContent.style.diplay = "none";
    landingContent.style.display = "none";
    navContent.style.display = "none";
    loginGoogle();
});

registerBtn.addEventListener('click', () => {
    
    loginContent.style.display = "none";
    registerContent.style.display = "block";
    landingContent.style.display = "none";
    navContent.style.display = "none";
    loginGoogle();
});

// Funcion login with google

const loginGoogle = () => {
    const loginGoogle = document.getElementById('loginGoogle');
    loginGoogle.addEventListener('click', async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
            console.log("Entro con google");
        } catch (error) {
            console.log(error);
        };
    });
};






// //Observador de Firebase que verifica si estás logeado y esconde el register o si no estás logeado, solo te muestra el register. 
// firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//         console.log("user");
//         botones.innerHTML= `
//         <button href="#" type="submit" id="loginGoogle">LOGIN</button>
//         `;
//         login();
//     }else{
//         console.log("no existe usuario")
//         botones.innerHTML=`
//         <button href="#" type="submit" id="registerGoogle">REGISTER</button>
//         `;
//         login();
//         console.log(registrate)
//     }


// })  //FUNCIONANDO BIEN para ocuparlo eventualmente 

