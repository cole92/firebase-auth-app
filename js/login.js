import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import app from "./config.js";

const database = getDatabase(app);
const auth = getAuth();

const login = document.getElementById('login');

login.addEventListener('click', e => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // Kreiramo novi datum
    const dt = new Date();
    // Koristimo metodu update i kreiramo za svaki objekat korisnika
    // ... novi kljuc last_login i vrednost trenutnog datuma
    update(ref(database, 'users/' + user.uid), {
        last_login: dt
    })
    setTimeout(() => {
        console.log(location.href);
        window.location = 'index.html';
      }, 1000)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
