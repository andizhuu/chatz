// app.js
// Pastikan firebase.js sudah dimuat lebih dulu di HTML

// --- REGISTER ---
document.getElementById("registerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Registrasi berhasil!");
      window.location.href = "home.html";
    })
    .catch(error => alert(error.message));
});

// --- LOGIN ---
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Login berhasil!");
      window.location.href = "home.html";
    })
    .catch(error => alert(error.message));
});

// --- LOGOUT ---
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html"; // kembali ke login
  });
}
window.logout = logout; // biar bisa dipanggil dari tombol di HTML
