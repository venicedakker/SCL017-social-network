import { router } from './router.js';
// Manejo de las rutas
router();

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
