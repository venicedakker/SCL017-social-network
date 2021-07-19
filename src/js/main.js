import {router} from "./router.js";

// call the routers --> cambios en el hash del url
router(window.location.hash);

window.addEventListener("hashchange",()=>{
    router(window.location.hash);
});

// Get change when it goes inside the page (posts feed)
auth.onAuthStateChanged((user)=>{
    if(user){
        let uid = user.uid;
        console.log("user id? "+uid);
        router("#/feed");
    } else {
        router(window.location.hash);
    }
});