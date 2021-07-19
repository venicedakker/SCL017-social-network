import LandingPage from "./views/LandingPage.js";
import LoginView from "./views/LoginView.js";
import RegisterView from "./views/RegisterView.js";
import FeedView from "./views/FeedView.js";
import ProfileView from "./views/ProfileView.js";

let content = document.getElementById("root");
const title = document.querySelector("title");
function router(route) {
    content.innerHTML = '';
    switch (route) {
        case '': {
            // document.title("Laboratoria Students - Landing");
            content.appendChild(LandingPage());
            break;
        }
        case '#/': {
            content.appendChild(LandingPage());
            break;
        }
        case '#/login':{
            
           title.innerHTML="Login";
            // console.log("login here")
            content.appendChild(LoginView());
            break;
        }
        case '#/register': {
            title.innerHTML="Register";
            // console.log("register here")
            content.appendChild(RegisterView());
            break;
        }
        case '#/feed': {
            title.innerHTML="Feed";
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