import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("LOGIN");
    }
    async getHtml() {
        return `
        <div class="new-colors">
        <section id="login-content">
        <form id="login-form">
            <h1 class="login-password">Log in</h1>
            <input class="inputs" type="email" id="login-email" placeholder="Enter email" required>
            <input class="inputs" type="password" id="login-password" placeholder="Enter Password" required>
        </form>

        <button class="login" href="#" type="submit" id="login-btn">LO GIN</button>

        <div style="width:400px;margin:auto;">
            <div class="linea">&nbsp;</div>
            <div class="or">Or</div>
            <div class="linea">&nbsp;</div>
            </div>

        <button class="login-google" href="#" type="button" id="loginGoogle"> <span>Login with</span> <img class="img-google" src="./css/img_app/google.png" alt="google"> <span>oogle</span></button>
        <button href="#" type="button" id ="logout-btn" class="inputs">LOGOUT</button>

    </section>
    </div>
        `;
    }
}