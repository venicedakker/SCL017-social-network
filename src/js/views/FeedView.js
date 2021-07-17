import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Página Principal");
    }
    async getHtml() {
        return `
        <section id="feed" style="display: none;">
            <h1>Estas en el Feed</h1>
            <button href="#" type="button" id="logout-btn">LOGOUT</button>
        </section>

        `;
    }
}