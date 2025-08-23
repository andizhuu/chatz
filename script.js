// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Konfigurasi Firebase (ganti sesuai projectmu)
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Register
const regBtn = document.getElementById("registerBtn");
if (regBtn) {
  regBtn.addEventListener("click", async () => {
    const email = document.getElementById("registerEmail").value;
    const pass = document.getElementById("registerPassword").value;
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      window.location.href = "home.html";
    } catch (err) {
      alert(err.message);
    }
  });
}

// Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      window.location.href = "home.html";
    } catch (err) {
      alert(err.message);
    }
  });
}

// Cek user aktif
onAuthStateChanged(auth, (user) => {
  if (window.location.pathname.includes("home.html")) {
    if (user) {
      document.getElementById("welcome").innerText = "Halo, " + user.email + " 👋";
      document.getElementById("userEmail").innerText = user.email;
    } else {
      window.location.href = "index.html";
    }
  }
});

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "index.html";
  });
}

// Chat
const sendBtn = document.getElementById("sendBtn");
if (sendBtn) {
  const messagesRef = collection(db, "messages");

  sendBtn.addEventListener("click", async () => {
    const input = document.getElementById("messageInput");
    if (input.value.trim() !== "") {
      await addDoc(messagesRef, {
        text: input.value,
        user: auth.currentUser.email,
        createdAt: serverTimestamp()
      });
      input.value = "";
    }
  });

  const q = query(messagesRef, orderBy("createdAt"));
  onSnapshot(q, (snapshot) => {
    const msgDiv = document.getElementById("messages");
    msgDiv.innerHTML = "";
    snapshot.forEach((doc) => {
      const data = doc.data();
      const p = document.createElement("p");
      p.textContent = `${data.user}: ${data.text}`;
      msgDiv.appendChild(p);
    });
  });
}
