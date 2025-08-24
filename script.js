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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          window.location.href = "home.html";
        })
        .catch(err => alert(err.message));
    });
  }

  // Register
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          window.location.href = "home.html";
        })
        .catch(err => alert(err.message));
    });
  }

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      auth.signOut().then(() => {
        window.location.href = "index.html";
      });
    });
  }
});
