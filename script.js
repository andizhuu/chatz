// --- Inisialisasi Firebase ---
// (isi sesuai config Firebase project kamu)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Cek kalau belum diinisialisasi
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// --- LOGIN ---
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Login berhasil!");
        window.location.href = "home.html"; // halaman setelah login
      })
      .catch((error) => {
        alert("Login gagal: " + error.message);
      });
  });
}

// --- REGISTER ---
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Registrasi berhasil!");
        window.location.href = "home.html"; // langsung ke home
      })
      .catch((error) => {
        alert("Registrasi gagal: " + error.message);
      });
  });
}
