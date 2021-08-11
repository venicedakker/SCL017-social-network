export default () =>  {

  function fechaView (idUser, callBack) {
    //  console.log(idUser);
        const dataBase = firebase.firestore()
      if(idUser){
          dataBase.collection("posts")
          .orderBy('fecha', 'desc')//para que aparezcan los post en orden/
          .where('userId', '==', firebase.auth().currentUser.uid)
          .get()
          .then(callBack);
      }else{
        
          dataBase.collection("posts")
          .orderBy('fecha', 'desc')//para que aparezcan los post en orden/
          .get()
          .then(callBack);
      }
  }
}



