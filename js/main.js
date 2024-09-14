import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import app from "./config.js";

const database = getDatabase(app);
const auth = getAuth();

const user = auth.currentUser;

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

// E listener na logout btn
const logout = document.getElementById('logout');

logout.addEventListener('click', e => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert('User logged out')
        location.href = 'login.html'
      }).catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        alert(errorMessage);
      });

});