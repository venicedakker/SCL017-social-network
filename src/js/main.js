import { someStyling } from './style-manager.js';
import { router } from './router.js';

// Manejo de las rutas
router();

// cambio de algunos stilos con js
window.addEventListener('hashchange', () => {
  const footer = document.querySelector('footer');
  const title = document.querySelector('title');
  someStyling(window.location.pathname, footer, title);
});

// Get change when it goes inside the page (posts feed)
const auth = firebase.auth();
auth.onAuthStateChanged((user) => {
  if (user) {
    window.location.hash = '#/feed';
    // console.log(user);
  } else {
    window.location.hash = '#/landing';
  }
});

// // obtengo los valores de la coleccion usuario
// // const getUsers = () => firebase.firestore().collection('users').get();

//---------------------------------------------------------------------------------
