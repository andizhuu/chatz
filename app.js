// app.js
import { auth } from "./firebase.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// 🔹 cek status login
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // kalau belum login, kembali ke halaman login
    if (!window.location.pathname.includes("index.html") &&
        !window.location.pathname.includes("register.html")) {
      window.location.href = "index.html";
    }
  } else {
    // kalau user ada → isi profil (kalau di profil.html)
    if (document.getElementById("userName")) {
      document.getElementById("userName").textContent = user.displayName || "Tanpa Nama";
      document.getElementById("userEmail").textContent = user.email;

      const userPhoto = document.getElementById("userPhoto");
      if (user.photoURL) {
        userPhoto.src = user.photoURL;
      }
    }
  }
});

// 🔹 tombol Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      window.location.href = "index.html";
    } catch (err) {
      alert("Gagal logout: " + err.message);
    }
  });
}
