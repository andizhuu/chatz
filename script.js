function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function register() {
  let user = document.getElementById("registerUsername").value;
  let pass = document.getElementById("registerPassword").value;

  if (user && pass) {
    localStorage.setItem("user_"+user, pass);
    alert("Pendaftaran berhasil! Silakan login.");
    showLogin();
  } else {
    alert("Isi semua field!");
  }
}

function login() {
  let user = document.getElementById("loginUsername").value;
  let pass = document.getElementById("loginPassword").value;

  let savedPass = localStorage.getItem("user_"+user);

  if (savedPass && savedPass === pass) {
    alert("Login berhasil!");
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("chatRoom").style.display = "block";
  } else {
    alert("Username/Password salah!");
  }
}

function logout() {
  document.getElementById("chatRoom").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function sendMessage() {
  let msgBox = document.getElementById("messages");
  let input = document.getElementById("messageInput");

  if (input.value.trim() !== "") {
    let p = document.createElement("p");
    p.textContent = input.value;
    msgBox.appendChild(p);
    input.value = "";
    msgBox.scrollTop = msgBox.scrollHeight;
  }
}
