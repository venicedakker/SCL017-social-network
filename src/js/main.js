import {router} from "./router.js";
import firebaseFunctions from "./firebase-functions.js";
// call the routers --> cambios en el hash del url
router(window.location.hash);

window.addEventListener("hashchange",()=>{
    router(window.location.hash);
});

// Get change when it goes inside the page (posts feed)
auth.onAuthStateChanged((user)=>{
    if(user){
        let userInfo =  {
            id: user.uid,
            email: user.email
        }
        router("#/feed");
    } else {
        router(window.location.hash);
    }
});

firebaseFunctions.firebaseCollectionsUsers(userInfo.uid, userInfo.email);
