function someStyling(hash, footer, titleDoc) {
  titleDoc.innerHTML = '';
  switch (hash) {
    case '/':
      footer.style.display = 'block';
      titleDoc.innerHTML = 'Laboratoria Students';
      footerScroll();
      break;
    case '/login':
      footer.style.display = 'block';
      titleDoc.innerHTML = 'Login - Laboratoria Students';
      break;
    case '/register':
      footer.style.display = 'block';
      titleDoc.innerHTML = 'Register - Laboratoria Students';
      break;
    case '/feed':
      footer.style.display = 'none';
      titleDoc.innerHTML = 'Feed - Laboratoria Students';
      break;
    case '/profile':
      footer.style.display = 'none';
      titleDoc.innerHTML = 'Profile - Laboratoria Students';
      break;
  }

  function footerScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY == 0) {
        footer.classList.remove('scrolling');
      } else {
        footer.classList.add('scrolling');
      }
    });
  }
}
export { someStyling };
