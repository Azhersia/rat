// import needed assets
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-YUdAZU7FFh4rxKNJNza0bhICHpspLcs",
  authDomain: "rattae-9a139.firebaseapp.com",
  projectId: "rattae-9a139",
  storageBucket: "rattae-9a139.appspot.com",
  messagingSenderId: "304523633008",
  appId: "1:304523633008:web:5ea3b4735ce2d491922fb5",
  databaseURL: "https://rattae-9a139-default-rtdb.europe-west1.firebasedatabase.app/"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);

// initializes Realtime Database and get a reference service
export const db = getDatabase(app)

