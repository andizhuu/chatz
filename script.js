import { signInWithEmailAndPassword, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;
  signInWithEmailAndPassword(window.auth, email, pass)
    .then(() => window.location.href = "home.html")
    .catch(err => alert("Login gagal: " + err.message));
}

window.register = function () {
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPassword").value;
  createUserWithEmailAndPassword(window.auth, email, pass)
    .then(() => window.location.href = "home.html")
    .catch(err => alert("Register gagal: " + err.message));
}
