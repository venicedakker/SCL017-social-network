//Observador de Firebase que verifica si estás logeado y esconde el register o si no estás logeado, solo te muestra el register. 
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("user")
        botones.innerHTML= `
        <button href="#" type="submit" id="loginGoogle">LOGIN</button>
        `
        login()  
    } else {
        console.log("no existe usuario")
        botones.innerHTML=`
        <button href="#" type="submit" id="registerGoogle">REGISTER</button>
        `
        login()
        console.log(registrate)

      }
})  //FUNCIONANDO BIEN para ocuparlo eventualmente 

const botones=document.querySelector('#botones');

const login = () => {
    const loginGoogle=document.getElementById('loginGoogle');
    loginGoogle.addEventListener('click', async() => {
     const provider = new firebase.auth.GoogleAuthProvider();
     //e.preventDefault();   
        try { 
            await firebase.auth().signInWithPopup(provider)
            console.log("entro con google");
        } catch (error) {
            console.log(error)
            };        
    })
}
