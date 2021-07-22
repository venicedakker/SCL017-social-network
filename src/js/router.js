import landingPage from './views/landingPage.js';
import loginView from './views/loginView.js';
import registerView from './views/registerView.js';
import feedView from './views/feedView.js';
import profileView from './views/profileView.js';

const content = document.getElementById('root');
const title = document.querySelector('title');
function router(route) {
  content.innerHTML = '';
  switch (route) {
    case '': {
      // document.title("Laboratoria Students - Landing");
      content.appendChild(landingPage());
      break;
    }
    case '#/': {
      content.appendChild(landingPage());
      break;
    }
    case '#/login': {
      title.innerHTML = 'Login';
      // console.log("login here")
      content.appendChild(loginView());
      break;
    }
    case '#/register': {
      title.innerHTML = 'Register';
      // console.log("register here")
      content.appendChild(registerView());
      break;
    }
    case '#/feed': {
      title.innerHTML = 'Feed';
      // console.log("this Feed")
      content.appendChild(feedView());
      break;
    }

    case '#/profile': {
      // console.log("this profile")
      content.appendChild(profileView());
      break;
    }
    default: {
      /* console.log('default here'); */
      router('');
      break;
    }
  }
}
export { router };
