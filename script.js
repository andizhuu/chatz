// script.js
import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// ================= REGISTER =================
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = registerForm["email"].value;
    const password = registerForm["password"].value;
    const username = registerForm["username"].value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email,
        username
      });

      alert("Registrasi berhasil! Silakan login.");
      window.location.href = "index.html";
    } catch (error) {
      alert("Error Register: " + error.message);
    }
  });
}

// ================= LOGIN =================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm["email"].value;
    const password = loginForm["password"].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "home.html";
    } catch (error) {
      alert("Error Login: " + error.message);
    }
  });
}

// ================= LOGOUT =================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("Logout berhasil!");
      window.location.href = "index.html";
    } catch (error) {
      alert("Error Logout: " + error.message);
    }
  });
}
