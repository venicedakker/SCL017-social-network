import landingPage from '../src/js/views/landingPage';
import loginView from '../src/js/views/loginView';
import registerView from '../src/js/views/registerView';
import profileView from '../src/js/views/profileView';
import feedView from '../src/js/views/feedView';

describe('different views created with dynamic html elements', () => {
  it('should return a landing page template', () => {
    const landingView = landingPage();
    expect(landingView instanceof HTMLElement).toBe(true);
  });
  it('should return a login page template', () => {
    const loginPage = loginView();
    expect(loginPage instanceof HTMLElement).toBe(true);
  });
  it('should return a register page template', () => {
    const registerPage = registerView();
    expect(registerPage instanceof HTMLElement).toBe(true);
  });
  it('should return a profile page template', () => {
    const profilePage = profileView();
    expect(profilePage instanceof HTMLElement).toBe(true);
  });
  it('shoul return a feed page template', () => {
    const feedPage = feedView();
    expect(feedPage instanceof HTMLElement).toBe(true);
  });
});
