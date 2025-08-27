// app.js
import { 
  auth, 
} from "./firebase.js";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// LOGIN
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// REGISTER
export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// LOGOUT
export function logout() {
  return signOut(auth).then(() => {
    window.location.href = "index.html";
  });
}
