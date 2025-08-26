<!-- script.js -->
<script type="module">
  import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signOut
  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  // Ambil auth dari window (firebase.js)
  const auth = window.auth;

  // === Login ===
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login berhasil ✅");
        window.location.href = "home.html"; // pindah ke halaman home
      } catch (error) {
        alert("Login gagal ❌ " + error.message);
      }
    });
  }

  // === Register ===
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registrasi berhasil ✅");
        window.location.href = "home.html"; // setelah daftar langsung masuk home
      } catch (error) {
        alert("Registrasi gagal ❌ " + error.message);
      }
    });
  }

  // === Logout (opsional di home) ===
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      alert("Berhasil logout ✅");
      window.location.href = "index.html";
    });
  }
</script>
