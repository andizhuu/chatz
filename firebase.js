// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAC-M7ZAVJtsdBzvjPllaa5j_9j-bfsjbY",
  authDomain: "chatz-16cd9.firebaseapp.com",
  projectId: "chatz-16cd9",
  storageBucket: "chatz-16cd9.firebasestorage.app",
  messagingSenderId: "1012938581248",
  appId: "1:1012938581248:web:e24b05a3576c1945123fe5",
  measurementId: "G-EYYLZRNBW9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ===== LOGIN =====
window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "home.html";
    })
    .catch((error) => alert(error.message));
};

// ===== REGISTER =====
window.register = function () {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "home.html";
    })
    .catch((error) => alert(error.message));
};

// ===== LOGOUT =====
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth).then(() => {
        window.location.href = "index.html";
      });
    });
  }
});
