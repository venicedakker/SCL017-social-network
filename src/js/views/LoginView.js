import firebaseFunctions from "../firebase-functions.js";
export default () => {
    const loginView = `
         <div class="new-colors">
            <section id="login-content">
                <form id="login-form">
                    <h1 class="title-form">Log in</h1> <br>
                    <input class="input-data" type="email" id="login-email" placeholder="Enter Email" required>
                    <input class="input-data" type="password" id="login-password" placeholder="Enter Password" required>
                    <button class="action-btn" type="submit" id="login-btn">LOGIN</button>
                </form>
                <div class="line">&nbsp;</div>
                <div class="or">Or</div>
                <div class="line">&nbsp;</div>
                
                <button class="action-google" href="#" type="button" id="loginGoogle"> <span>Login with</span> 
                    <img class="img-google" src="./css/img_app/google.png" alt="google"> <span>oogle</span></button>
                <h3 class="enter"> ¿No tienes cuenta? 
                <a href="#/register" id="link-redirect"> Registrate aquí </a>
                </h3>
            </section>
        </div>
        `;

    const loginElement = document.createElement('section');
    loginElement.innerHTML = loginView;

    const loginForm = loginElement.querySelector("#login-form");
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginElement.querySelector("#login-email").value;
        const password = loginElement.querySelector("#login-password").value;
        firebaseFunctions.loginAccount(email, password);
    });

    return loginElement;

}


//         <div class="new-colors">
//         <section id="login-content">
//         <form id="login-form">
//             <h1 class="login-password">Log in</h1>
//             <input class="inputs" type="email" id="login-email" placeholder="Enter email" required>
//             <input class="inputs" type="password" id="login-password" placeholder="Enter Password" required>
//         </form>

//         <button class="login" href="#" type="submit" id="login-btn">LO GIN</button>

//         <div style="width:400px;margin:auto;">
//             <div class="linea">&nbsp;</div>
//             <div class="or">Or</div>
//             <div class="linea">&nbsp;</div>
//             </div>

//         <button class="login-google" href="#" type="button" id="loginGoogle"> <span>Login with</span> <img class="img-google" src="./css/img_app/google.png" alt="google"> <span>oogle</span></button>
//         <button href="#" type="button" id ="logout-btn" class="inputs">LOGOUT</button>

//     </section>
//     </div>
//         `;
//     }
// }