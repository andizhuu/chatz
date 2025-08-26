// LOGIN
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        alert("Login sukses!");
        window.location.href = "home.html";
      } catch (error) {
        alert("Login gagal: " + error.message);
      }
    });
  }

  // REGISTER
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("registerName").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;

      try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await userCredential.user.updateProfile({
          displayName: name
        });
        alert("Registrasi berhasil!");
        window.location.href = "index.html";
      } catch (error) {
        alert("Registrasi gagal: " + error.message);
      }
    });
  }
});
