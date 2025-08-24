// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Config Firebase (punyamu)
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
const auth = getAuth(app);

// ====================== REGISTER ======================
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("✅ Akun berhasil dibuat!");
        window.location.href = "index.html"; // balik ke login
      })
      .catch((error) => {
        alert("❌ Error: " + error.message);
      });
  });
}

// ====================== LOGIN ======================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("✅ Login berhasil!");
        window.location.href = "home.html"; // 🚀 redirect ke beranda
      })
      .catch((error) => {
        alert("❌ Error: " + error.message);
      });
  });
}

// ====================== LOGOUT ======================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      alert("✅ Logout berhasil!");
      window.location.href = "index.html"; // balik ke login
    });
  });
}
