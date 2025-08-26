// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Config
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

// ================= LOGIN =================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login berhasil!");
      window.location.href = "home.html"; // Redirect ke halaman home
    } catch (error) {
      alert("Login gagal: " + error.message);
    }
  });
}

// ================= REGISTER =================
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registrasi berhasil!");
      window.location.href = "home.html"; // otomatis login lalu ke home
    } catch (error) {
      alert("Registrasi gagal: " + error.message);
    }
  });
}

// ================= CEK LOGIN STATUS =================
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User aktif:", user.email);
  } else {
    console.log("Belum login");
  }
});

// ================= LOGOUT =================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "index.html"; // kembali ke login
  });
}
