const auth = firebase.auth();

const firebaseFunctions = {
  registerAccount: (email, password, username) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        user.updateProfile({
          displayName: username,
        });
        user.sendEmailVerification();
      })
      .catch(() => {
        // console.log(error);
        // alert(error.message);
      });
  },
  loginAccount: (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(() => {
        // console.log(error);
        // alert(error.message);
      });
  },
  googleLogin: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        // const user = auth.currentUser;
        // console.log(user);
        // console.log(result);
      })
      .catch(() => {
        // console.log(error);
      });
  },
  logoutAccount: () => {
    auth
      .signOut()
      .then(() => {
        // console.log('logout');
      })
      .catch(() => {
        // console.log(error);
      });
    window.location.hash = '';
  },
  currentUser: () => {
    const user = auth.currentUser;
    if (user != null && user.emailVerified) {
      return user;
    }
    return null;
  },
};

export default firebaseFunctions;
