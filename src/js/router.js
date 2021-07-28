import landingPage from './views/landingPage.js';
import loginView from './views/loginView.js';
import registerView from './views/registerView.js';
import feedView from './views/feedView.js';
import profileView from './views/profileView.js';

function router(){
  const rootContainer = document.getElementById('root');

  const content = {
    "#/landing": landingPage(),
    "#/login": loginView(),
    "#/register": registerView(),
    "#/feed": feedView(),
    "#/profile": profileView(),
  };
  
  const routes = {
    "/": landingPage(),
    "/login": loginView(),
    "/register": registerView(),
    "/feed": feedView(),
    "/profile": profileView(),
  };
  
  const pathname = window.location.pathname;
  rootContainer.appendChild(routes[pathname]);
  
  
  window.addEventListener('hashchange', () => {
    const hashLocation = window.location.hash;
    rootContainer.innerHTML = "";
    rootContainer.appendChild(content[hashLocation]);
    changeRouteUrl(hashLocation);
  });
  
  window.onpopstate = () => {
    const newPath = window.location.pathname;
    rootContainer.innerHTML = "";
    rootContainer.appendChild(routes[newPath]);
  };
  
  const changeRouteUrl = (hash) => {
    if (hash === "#/landing") {
      window.history.replaceState({}, "landing", "/");
    } else if (hash === "#/login") {
      window.history.replaceState({}, "login", "/login");
    } else if (hash === "#/register") {
      window.history.replaceState({}, "register", "/register");
    } else if (hash === "#/feed") {
      window.history.replaceState({}, "feed", "/feed");
    } else if (hash === "#/profile") {
      window.history.replaceState({}, "profile", "/profile");
    }
  };
  
}
export { router };
