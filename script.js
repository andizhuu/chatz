// Simpan akun di localStorage
function saveUser(username, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
}

// Cek login
function checkLogin(username, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find(user => user.username === username && user.password === password);
}

// Register
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.username === username)) {
      document.getElementById("registerError").innerText = "Username sudah dipakai!";
      return;
    }

    saveUser(username, password);
    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "index.html";
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (checkLogin(username, password)) {
      localStorage.setItem("currentUser", username);
      window.location.href = "home.html";
    } else {
      document.getElementById("loginError").innerText = "Username atau password salah!";
    }
  });
}

// Tampilkan username di home
if (window.location.pathname.includes("home.html")) {
  const user = localStorage.getItem("currentUser");
  if (user) {
    document.getElementById("userWelcome").innerText = user;
  } else {
    window.location.href = "index.html";
  }
}

// Logout
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
