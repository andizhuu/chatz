// Ganti config ini dengan Firebase project kamu
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
var username = null;

var chatBox = document.getElementById("chat-box");
var messageInput = document.getElementById("message");
var sendBtn = document.getElementById("send");
var startBtn = document.getElementById("start-btn");

startBtn.onclick = function() {
  var input = document.getElementById("username-input").value.trim();
  if(input !== ""){
    username = input;
    document.getElementById("username-box").style.display = "none";
    chatBox.style.display = "block";
    document.getElementById("input-area").style.display = "flex";
  } else {
    alert("Masukkan username dulu!");
  }
};

sendBtn.onclick = function() {
  var msg = messageInput.value.trim();
  if(msg !== "" && username){
    db.ref("messages").push().set({
      user: username,
      message: msg
    });
    messageInput.value = "";
  }
};

db.ref("messages").on("child_added", function(snapshot){
  var data = snapshot.val();
  var div = document.createElement("div");
  div.classList.add("msg");

  if(data.user === username){
    div.classList.add("me");
  } else {
    div.classList.add("other");
  }

  div.textContent = data.user + ": " + data.message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});
