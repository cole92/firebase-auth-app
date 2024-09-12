import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import app from "./config.js";

const database = getDatabase(app);

const auth = getAuth();
const signUp = document.getElementById('signUp');

signUp.addEventListener('click', es => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...

    alert('User is created');
    location.href = '../login.html'; // Nisam siguran za putanju! (Izmeniti naknadno)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);    
  });
})