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
var chatBox = document.getElementById("chat-box");
var messageInput = document.getElementById("message");
var sendBtn = document.getElementById("send");

// Kirim pesan
sendBtn.onclick = function() {
  var msg = messageInput.value;
  if(msg.trim() !== ""){
    db.ref("messages").push().set({
      user: "Anon",
      message: msg
    });
    messageInput.value = "";
  }
};

// Terima pesan
db.ref("messages").on("child_added", function(snapshot){
  var data = snapshot.val();
  var p = document.createElement("p");
  p.textContent = data.user + ": " + data.message;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
});
