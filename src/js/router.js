import landingPage from './views/landingPage.js';
import loginView from './views/loginView.js';
import registerView from './views/registerView.js';
import feedView from './views/feedView.js';
import profileView from './views/profileView.js';
import firebaseFunctions from './firebase-functions.js';

const content = document.getElementById('root');
const title = document.querySelector('title');
const footer = document.querySelector('footer');
const user = firebaseFunctions.currentUser();

function router(route) {

  content.innerHTML = '';
  switch (route) {
    case '': {
      title.innerHTML = ('Laboratoria Students');
      content.appendChild(landingPage());
      break;
    }
    case '#/login': {
      title.innerHTML = 'Login - Laboratoria Students';
      content.appendChild(loginView());
      console.log(user);
      break;
    }
    case '#/register': {
      title.innerHTML = 'Register - Laboratoria Students';
      content.appendChild(registerView());
      break;
    }
    case '#/feed': {
      content.appendChild(feedView());
      footer.style.display = 'none';
      console.log(user);
      break;

      // if (user!=null) {
      //   window.location.hash = '#/feed';
      //   title.innerHTML = 'Feed - Laboratoria Students';
      //   content.appendChild(feedView());
      //   footer.style.display = "none";
      // } else {
      //   alert("Check your email to verified account");
      //   window.location.hash = '#/login';
      // }
      // break;
    }

    case '#/profile': {
      content.appendChild(profileView());
      break;
      // if (user != null) {
      //   window.location.hash = '#/profile';
      //   title.innerHTML = 'Profile - Laboratoria Students';
      //   content.appendChild(profileView());
      // } else {
      //   alert("login to see profile")
      //   window.location.hash = '#/login';

      // }
      // break;
    }
    default: {
      /* console.log('default here'); */
      router('');
      break;
    }
  }
}
export { router };
