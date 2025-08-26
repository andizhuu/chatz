document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 👉 contoh login sederhana (dummy)
  if (username === "admin" && password === "1234") {
    alert("Login berhasil! Selamat datang " + username);
    window.location.href = "home.html"; // pindah ke halaman home
  } else {
    alert("Username atau password salah!");
  }
});
