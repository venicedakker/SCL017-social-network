import { router } from './router.js';

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

// Get change when it goes inside the page (posts feed)
const auth = firebase.auth();
auth.onAuthStateChanged((user) => {
  if (user) {
    // const userActive = firebaseFunctions.currentUser();
    router('#/feed');
  } else {
    router('');
  }
});

// obtengo los valores de la coleccion usuario
// const getUsers = () => firebase.firestore().collection('users').get();
