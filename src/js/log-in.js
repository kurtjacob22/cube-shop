//! list of Usernames and passwords

var users = ["kurt", "msmata", "admin", "user"];
var passwords = ["password", "teacher", "admin", "user"];
var verify = false;
var verifiedPass = false;
var userCred;

function checkIfValidUser(user) {
  var verify = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i] === user.value) {
      //   user.style.outlineColor = "green";
      verify = true;
      userCred = i;
    } else {
      user.style.outlineColor = "red";
    }
  }

  if (verify) {
    user.style.outlineColor = "green";
  }

  return verify;
}

function checkIfValidPassword(pass) {
  if (passwords[userCred] === pass.value) {
    pass.style.outlineColor = "green";
    verifiedPass = true;
  } else {
    pass.style.outlineColor = "red";
  }
}

function showPassword() {
  if (userCred == undefined) {
    alert("Please enter your username first");
  } else {
    alert("Your Password is: " + passwords[userCred]);
    document.getElementById("password").value = passwords[userCred];
  }
}

function login() {
  if (verifiedPass == true) {
    alert("login success");
  } else {
    alert("Please Enter valid username and password");
  }
}
