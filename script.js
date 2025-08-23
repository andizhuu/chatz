function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  if (user && pass) {
    localStorage.setItem("chatzUser", user);
    localStorage.setItem("chatzPass", pass);
    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "index.html";
  } else {
    alert("Isi semua form!");
  }
}

function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;
  let savedUser = localStorage.getItem("chatzUser");
  let savedPass = localStorage.getItem("chatzPass");

  if (user === savedUser && pass === savedPass) {
    alert("Login berhasil! Selamat datang " + user);
    localStorage.setItem("loggedInUser", user);
    window.location.href = "chat.html";
  } else {
    alert("Username atau password salah!");
  }
}

function sendMessage() {
  let msg = document.getElementById("message").value;
  let chatBox = document.getElementById("chatBox");
  let user = localStorage.getItem("loggedInUser");

  if (msg.trim() !== "") {
    let p = document.createElement("p");
    p.textContent = user + ": " + msg;
    chatBox.appendChild(p);
    document.getElementById("message").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
