import firebaseFunctions from "../firebase-functions.js";
export default () => {
    const feedView = `
                <h1> THIS IS THE FEEEEEED</h1>
                <a href="" id="logout-btn">LOGOUT</a>
            `;
    const feedElement = document.createElement('section');
    feedElement.innerHTML = feedView;

    const logoutButton = feedElement.querySelector("#logout-btn");
    logoutButton.addEventListener('click',(e) =>{
        e.preventDefault();
        firebaseFunctions.logoutAccout();
        console.log("logout");
    });

    return feedElement;
}


// import AbstractView from "./AbstractView.js";

// export default class extends AbstractView {
//     constructor() {
//         super();
//         this.setTitle("Página Principal");
//     }
//     async getHtml() {
//         return `
//         <section id="feed" style="display: none;">
//             <h1>Estas en el Feed</h1>
//             <button href="#" type="button" id="logout-btn">LOGOUT</button>
//         </section>

//         `;
//     }
// }