const firebaseFunctions = {
    registerAccount: (email, password) => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCreddentials => {
                const user = userCredential.user;
                console.log("user from register: " + user);
            })
            .catch((error) => {
                console.log(error);
                console.log(error.message);
            });
    },
    loginAccount: (email, password) => {

        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCreddentials => {
                const user = userCredential.user;
                console.log("user from login: " + user);
            })
            .catch((error) => {
                console.log(error.message);
                //window.alert('Error: '+ error.message);
            });

    },
    googleLogin: () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log("google login")
        })
        .catch((error) => {
            console.log(error);
        });
    },
    logoutAccout: () => {
        auth.signOut()
        .then(() => {
            console.log("logout");
        })
        .catch((error) =>{
            console.log(error);
        });
    }
};


export default firebaseFunctions;