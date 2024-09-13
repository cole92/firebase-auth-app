import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import app from "./config.js";

const database = getDatabase(app);

const auth = getAuth();
const signUp = document.getElementById('signUp');
// Listener na signUp dugme
signUp.addEventListener('click', es => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // Kreiramo korisnike u bazi kao objekte, koristimo metode firebase-a
    set(ref(database, 'users/' + user.uid), {
      username: username,
      email: email
    })

    alert('User is created');
    setTimeout(() => {
      console.log(location.href);
      window.location = 'login.html';
    }, 1000)
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);    
  });
})