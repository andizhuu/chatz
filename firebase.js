<!-- firebase.js -->
<script type="module">
  // Import Firebase SDK
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  // Konfigurasi Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAC-M7ZAVJtsdBzvjPllaa5j_9j-bfsjbY",
    authDomain: "chatz-16cd9.firebaseapp.com",
    projectId: "chatz-16cd9",
    storageBucket: "chatz-16cd9.firebasestorage.app",
    messagingSenderId: "1012938581248",
    appId: "1:1012938581248:web:e24b05a3576c1945123fe5",
    measurementId: "G-EYYLZRNBW9"
  };

  // Inisialisasi Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Biar bisa dipakai di script.js
  window.auth = auth;
</script>
