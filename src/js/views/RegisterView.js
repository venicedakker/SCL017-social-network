import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("REGISTER");
    }
    async getHtml() {
        return `
        <section id="register-content" >
            <form id="register-form">
                <input type="text" id="username" placeholder="Ingresa tu nombre de usuario" required>
                <input type="email" id="register-email" placeholder="Ingresa tu email" required>
                <input type="password" id="register-password" placeholder="Ingresa tu Password" required>
                <input type="password" id="register-password-confirmed" placeholder="Confirma tu Password" required>
                <button href="/feed" type="submit" id="register-btn" data-link> REGISTER </button>
            </form>
            <button href="/feed" type="button" id="loginGoogle">Login with Google</button>
        </section>
        `;
    }
}