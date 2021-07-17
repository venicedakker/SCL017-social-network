import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("LOGIN");
    }
    async getHtml() {
        return `
        <section id="login-content">
            <form id="login-form">
                <input type="email" id="login-email" placeholder="Ingresa tu email" required>
                <input type="password" id="login-password" placeholder="Ingresa tu Password" required>
                <button href="feed" type="submit" id="login-btn" data-link>LOGIN</button>
            </form>
            <button href="/feed" type="button" id="loginGoogle" data-link>Login with Google</button>
            <button href="/" type="button" id="logout-btn" data-link>LOGOUT</button>
        </section>

        `;
    }
}