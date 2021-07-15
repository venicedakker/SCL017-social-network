import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Página Principal");
    }
    async getHtml() {
        return `
        <nav id="navbar">
            <a href="/login" id="login" class="button" data-link>LOGIN</a>
            <a href="/register" id="register" class="button" data-link>Register</a>
        </nav>
        <main class="main-content"> 
            <section id="landing">
                <img id="symbol-1" class="logo" src="./css/img_app/chevronLS.png" alt="logo">
                <div class="title-students">
                    <h1 class="students"> <span class="chevron left"></span> Laboratoria Students<span
                        class="chevron right"></span> </h1>
                    <h2 class="title-two">Una red para todas</h2>
                </div>
                <section class="img-background"></section>
                <!-- <div>
                    <h2>Encontraras</h2>
                    <div class="green-circle"><h3>Publicar tu enlace de GitHub</h3></div>
                </div> -->

            </section>
        </main>
        `;
    }
}