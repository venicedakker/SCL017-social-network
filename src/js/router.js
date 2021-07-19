import LandingPage from "./views/LandingPage.js";
import LoginView from "./views/LoginView.js";
import RegisterView from "./views/RegisterView.js";
import FeedView from "./views/FeedView.js";
import ProfileView from "./views/ProfileView.js";

let content = document.getElementById("root");
function router(route) {
    content.innerHTML = '';
    switch (route) {
        case '': {
            content.appendChild(LandingPage());
            break;
        }
        case '#/login':{
            // console.log("login here")
            content.appendChild(LoginView());
            break;
        }
        case '#/register': {
            // console.log("register here")
            content.appendChild(RegisterView());
            break;
        }
        case '#/feed': {
            // console.log("this Feed")
            content.appendChild(FeedView());
            break;
        }

        case '#/profile': {
            // console.log("this profile")
            content.appendChild(ProfileView());
            break;
        }
        default: {
            console.log("default here")
            router('');
            break;
        }
    }
};
export { router };