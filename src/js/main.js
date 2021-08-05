/* eslint-disable */ 
import { someStyling } from './style-manager.js';
import { router } from './router.js';
import firebaseFunctions from './firebase-functions.js';

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
    // const userInfo = user;
    if (!user.emailVerified) {
      window.location.hash = '#/landing';
    }
    console.log(user);
  } else {
    window.location.hash = '#/landing';
    console.log(firebaseFunctions.userInfo());
  }
});

//  export const obs = () => {
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       return user;
//     } else {
//       window.location.hash = '#/landing';
//       console.log(firebaseFunctions.userInfo());
//     }
//   });
// }
// // obtengo los valores de la coleccion usuario
// // const getUsers = () => firebase.firestore().collection('users').get();

//---------------------------------------------------------------------------------
