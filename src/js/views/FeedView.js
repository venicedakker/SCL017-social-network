import firebaseFunctions from "../firebase-functions.js";
export default () => {
    const feedView = `
                <h1> THIS IS THE FEEEEEED</h1>
                <a href="#/" id="logout-btn">LOGOUT</a>
            `;
    const feedElement = document.createElement('section');
    feedElement.innerHTML = feedView;

    const logoutButton = feedElement.querySelector("#logout-btn");
    logoutButton.addEventListener('click',(e) =>{
        e.preventDefault();
        firebaseFunctions.logoutAccout();
        // console.log("logout");
    });

    return feedElement;
}

