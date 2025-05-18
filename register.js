const apiLink = "https://68219a92259dad2655afc3d3.mockapi.io";
const liUsername = document.getElementById("auth-username");
const liEmail = document.getElementById("auth-Email");
const liPassword = document.getElementById("auth-pass");
const authBtn = document.getElementById("auth-btn");

// user basic auth before register
// let emailvalid = liEmail.contains("@");
// let userval = liUsername.value;
authBtn.addEventListener("click", async () => {
  //   console.log("test");
  //   if (liUsername.value <= 4) {
  //     alert("user must be more than 4 letters");
  //     console.log(liUsername.value);
  //     return;
  //   }
  //   if (liEmail.value < 5) {
  //     alert("email  must be more than 4 letters");
  //     console.log(liEmail.value);
  //     return;
  //   }
  //   if (liPassword.value < 6) {
  //     alert("pasword must be more than 6 letters");
  //     console.log(liPassword.value);
  //     return;
  //   }
  //   if (!emailvalid.contains("@")) {
  //     alert("email must contain @");
  //   }
  // check if user already exists
  //   let userExists = false;
  //   try {
  //     let apiuser = await fetch(`${apiLink}/login?username${liUsername.value}`);
  //     let userinfo = await apiuser.json();
  //   } catch (err) {
  //     console.err(`an Error happaned ${err}`);
  //   }
  //   if (userinfo.status !== 404) userExists = true;
  //   if (userExists) {

  await fetch(`${apiLink}/login`, {
    method: "POST",
    body: JSON.stringify({
      username: liUsername.value,
      email: liEmail.value,
      password: liPassword.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  alert("you registered correctly move to login");
  localStorage.setItem("username", liUsername);
});

// decodeURIComponent
