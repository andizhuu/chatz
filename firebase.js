// firebase.js
// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAC-M7ZAVJtsdBzvjPllaa5j_9j-bfsjbY",
  authDomain: "chatz-16cd9.firebaseapp.com",
  projectId: "chatz-16cd9",
  storageBucket: "chatz-16cd9.firebasestorage.app",
  messagingSenderId: "1012938581248",
  appId: "1:1012938581248:web:e24b05a3576c1945123fe5",
  measurementId: "G-EYYLZRNBW9"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
