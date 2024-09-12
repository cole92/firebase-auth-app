  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAPFneZ-711-mwZUlKRVuFscgLdAJ_Lv44",
    authDomain: "authentication-app-d1def.firebaseapp.com",
    databaseURL: "https://authentication-app-d1def-default-rtdb.firebaseio.com",
    projectId: "authentication-app-d1def",
    storageBucket: "authentication-app-d1def.appspot.com",
    messagingSenderId: "494464271174",
    appId: "1:494464271174:web:18ef2a25d161b03bd85b47"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;