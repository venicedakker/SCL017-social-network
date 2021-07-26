import { router } from './router.js';
import firebaseFunctions from './firebase-functions.js';

// call the routers --> cambios en el hash del url
router(window.location.hash);

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

// Get change when it goes inside the page (posts feed)
const auth = firebase.auth();
auth.onAuthStateChanged((user) => {
  if (user) {
    /* console.log(user); */
    // let userInfo =  {
    //     id: user.uid,
    //     email: user.email
    // }
    // const querySnapshot = getUsers();
    // querySnapshot.forEach((doc)=>{
    //     if(user.uid != doc.id){
    //         firebaseFunctions.firebaseCollectionsUsers(userInfo.uid, userInfo.email);
    //     }
    // })
    // firebaseFunctions.firebaseCollectionsUsers(userInfo.uid, userInfo.email);

    router('#/feed');
  } else {
    router(window.location.hash);
  }
});

// obtengo los valores de la coleccion usuario
// const getUsers = () => firebase.firestore().collection('users').get();
