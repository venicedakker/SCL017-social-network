import firebaseFunctions from "../firebase-functions.js";
export default () => {
    const feedView = `
                <nav id="navbar-feed">
                    <div id="side-nav">
                        <a href="" id="logout-btn" class="button">LOGOUT</a>
                        <a href="#/profile" id="profile-btn" class="button" >PROFILE</a>
                    </div>
                </nav>
                
                <section id="feed-section">
                    <form>
                        <textarea id="new-post"cols="30" rows="10"></textarea>
                        <button type="submit" id="submit-post">Post</button>
                    </form>
                    <section id="all-posts">
                        <h1> THIS IS THE FEEEEEED</h1>    
                    </section>
                
                </section>
                
                
            `;


    const feedElement = document.createElement('section');
    feedElement.innerHTML = feedView;

    const logoutButton = feedElement.querySelector("#logout-btn");
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        firebaseFunctions.logoutAccout();
    });

    return feedElement;
}

