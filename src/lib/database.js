
function start(){
    const firebaseConfig = {
        apiKey: "AIzaSyB-ZhNY0bOsLoETvGQo1R6MCc7P6QlQo70",
        authDomain: "laboratoria-students.firebaseapp.com",
        projectId: "laboratoria-students",
        storageBucket: "laboratoria-students.appspot.com",
        messagingSenderId: "799248230188",
        appId: "1:799248230188:web:e5bc36e6598b93effd2e89",
        measurementId: "G-VE03X3KFMK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}
export {start};