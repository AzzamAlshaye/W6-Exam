const apiLink = "https://68219a92259dad2655afc3d3.mockapi.io/login";
let liUsername = document.getElementById("auth-username");
let liEmail = document.getElementById("auth-Email");
let liPassword = getElementById("auth-pass");
let authBtn = getElementById("auth-btn");
// user basic auth before register
authBtn.addEventListener("click", async (e) => {
  // check if user already exists
  try {
    let apiuser = await fetch(`${apiLink}/login?username${liUsername}`);
    let userinfo = await apiuser.json();
    userinfo.map((e) => {});
  } catch (err) {
    console.err(`an Error happaned ${err}`);
  }
});
