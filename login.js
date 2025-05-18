const apiLink = "https://68219a92259dad2655afc3d3.mockapi.io";

let liEmail = document.getElementById("auth-Email");
let liPassword = document.getElementById("auth-pass");
let authBtn = document.getElementById("auth-btn");

authBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let liEmail = document.getElementById("auth-Email").value;
  let liPassword = document.getElementById("auth-pass").value;
  console.log("email: ", liEmail);
  console.log("password: ", liPassword);
  if (!liEmail || !liPassword) {
    alert("email or password wrong");
    return;
  }
  fetch(`${apiLink}/login`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email: liEmail, password: liPassword }),
  })
    .then((authResponse) => {
      console.log("authResponse: ", authResponse);
      if (authResponse.status === 200) {
        return authResponse.json();
      } else if (authResponse.status === 401) {
        errorMessage.textcontent = "Accès non autrorisé";
      } else if (authResponse.status === 404) {
        errorMessage.textcontent = "Utilisateur non trouvé";
      } else {
        errorMessage.textcontent = `Error: ${authResponse.status}`;
      }
    })
    .then((userData) => {
      console.log("userData: ", userData);
      if (userData) {
        window.localStorage.setItem("username", JSON.stringify(userData));
        window.location.replace = "admin.html";
      }
    })
    .catch((error) => console.error(error));
});
