// Simpan data user ke localStorage
document.addEventListener("DOMContentLoaded", () => {
  // REGISTER
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const username = document.getElementById("regUsername").value;
      const password = document.getElementById("regPassword").value;

      if (localStorage.getItem(username)) {
        alert("Username sudah terdaftar!");
      } else {
        localStorage.setItem(username, password);
        alert("Registrasi berhasil! Silakan login.");
        window.location.href = "index.html"; // pindah ke halaman login
      }
    });
  }

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const savedPassword = localStorage.getItem(username);

      if (savedPassword && savedPassword === password) {
        alert("Login berhasil! Selamat datang " + username);
        localStorage.setItem("loggedInUser", username); // simpan session
        window.location.href = "home.html";
      } else {
        alert("Username atau password salah!");
      }
    });
  }
});
