// Ganti config Firebase
var firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.database();
var currentUser = null;

// 🔹 Switch Login/Register
document.getElementById("go-register").onclick = () => {
  document.getElementById("login-box").style.display = "none";
  document.getElementById("register-box").style.display = "block";
};
document.getElementById("go-login").onclick = () => {
  document.getElementById("register-box").style.display = "none";
  document.getElementById("login-box").style.display = "block";
};

// 🔹 Register
document.getElementById("register-btn").onclick = () => {
  var user = document.getElementById("reg-username").value.trim();
  var pass = document.getElementById("reg-password").value.trim();

  if(user && pass){
    db.ref("users/"+user).once("value", snap => {
      if(snap.exists()){
        alert("Username sudah dipakai!");
      } else {
        db.ref("users/"+user).set({password: pass});
        alert("Pendaftaran sukses, silakan login!");
        document.getElementById("go-login").click();
      }
    });
  } else {
    alert("Isi semua form!");
  }
};

// 🔹 Login
document.getElementById("login-btn").onclick = () => {
  var user = document.getElementById("login-username").value.trim();
  var pass = document.getElementById("login-password").value.trim();

  if(user && pass){
    db.ref("users/"+user).once("value", snap => {
      if(snap.exists() && snap.val().password === pass){
        currentUser = user;
        document.getElementById("login-box").style.display = "none";
        document.getElementById("register-box").style.display = "none";
        document.getElementById("chat-box-container").style.display = "block";
      } else {
        alert("Username/Password salah!");
      }
    });
  } else {
    alert("Isi semua form!");
  }
};

// 🔹 Chat
var chatBox = document.getElementById("chat-box");
document.getElementById("send").onclick = () => {
  var msg = document.getElementById("message").value.trim();
  if(msg && currentUser){
    db.ref("messages").push().set({
      user: currentUser,
      message: msg
    });
    document.getElementById("message").value = "";
  }
};

// 🔹 Listen pesan baru
db.ref("messages").on("child_added", snapshot => {
  var data = snapshot.val();
  var div = document.createElement("div");
  div.classList.add("msg");

  if(data.user === currentUser){
    div.classList.add("me");
  } else {
    div.classList.add("other");
  }

  div.textContent = data.user + ": " + data.message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});
