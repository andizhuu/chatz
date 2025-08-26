// script.js

// Register
function registerUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registrasi berhasil 🎉");
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}

// Login
function loginUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login berhasil ✅");
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}

// Logout
function logoutUser() {
  firebase.auth().signOut().then(() => {
    window.location.href = "index.html";
  });
}

// Cek status login
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("User login:", user.email);
  } else {
    console.log("Belum login");
  }
});
