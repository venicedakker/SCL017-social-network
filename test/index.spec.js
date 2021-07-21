import landingPage from '../src/js/views/landingPage';
import loginView from '../src/js/views/loginView';
import registerView from '../src/js/views/registerView';
import profileView from '../src/js/views/profileView';
import feedView from '../src/js/views/feedView';

describe('views performed in dynamic html', () => {
  it('should return html dynamics elements in each template', () => {
    const landingView = landingPage();
    expect(landingView instanceof HTMLElement).toBe(true);
  });
  it('login debería ser un template html', () => {
    const loginPage = loginView();
    expect(loginPage instanceof HTMLElement).toBe(true);
  });
  it('selection debería ser un template html', () => {
    const registerPage = registerView();
    expect(registerPage instanceof HTMLElement).toBe(true);
  });
  it('signup debería ser un template html', () => {
    const profilePage = profileView();
    expect(profilePage instanceof HTMLElement).toBe(true);
  });
  it('wall debería ser un template html', () => {
    const feedPage = feedView();
    expect(feedPage instanceof HTMLElement).toBe(true);
  });
});
