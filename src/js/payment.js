var fBool = false;
var lBool = false;
var countryBool = false;
var regionBool = false;
var townCityBool = false;
var addressBool = false;
var postalBool = false;
var phoneBool = false;

function fNameValidation() {
  var input = document.getElementById("fname");

  if (input.value.length >= 3) {
    input.style.outlineColor = "green";
    fBool = true;
  } else {
    input.style.outlineColor = "red";
    fBool = false;
  }
}

function lNameValidation() {
  var input = document.getElementById("lname");

  if (input.value.length >= 2) {
    input.style.outlineColor = "green";
    lBool = true;
  } else {
    input.style.outlineColor = "red";
    lBool = false;
  }
}

function countryValidation() {
  var input = document.getElementById("country").value;
  if (input === "Country") {
    countryBool = false;
  } else {
    countryBool = true;
  }
}

function regionValidation() {
  var input = document.getElementById("region");

  if (input.value.length >= 2) {
    input.style.outlineColor = "green";
    regionBool = true;
  } else {
    input.style.outlineColor = "red";
    regionBool = false;
  }
}

function townCityValidation() {
  var input = document.getElementById("townCity");

  if (input.value.length >= 3) {
    input.style.outlineColor = "green";
    townCityBool = true;
  } else {
    input.style.outlineColor = "red";
    townCityBool = false;
  }
}

function addressValidation() {
  var input = document.getElementById("address");

  if (input.value.length >= 10) {
    input.style.outlineColor = "green";
    addressBool = true;
  } else {
    input.style.outlineColor = "red";
    addressBool = false;
  }
}

function postalValidation() {
  var input = document.getElementById("postalCode");

  if (input.value.length >= 4 && input.value.length <= 32) {
    input.style.outlineColor = "green";
    postalBool = true;
  } else {
    input.style.outlineColor = "red";
    postalBool = false;
  }
}

function phoneValidation() {
  var input = document.getElementById("phoneNum");

  if (input.value.length == 11) {
    input.style.outlineColor = "green";
    phoneBool = true;
  } else {
    input.style.outlineColor = "red";
    phoneBool = false;
  }
}

function purchase() {
  if (
    fBool &&
    lBool &&
    countryBool &&
    regionBool &&
    townCityBool &&
    addressBool &&
    postalBool &&
    phoneBool
  ) {
    alert("Purchased!");
    window.location.replace("././shop.html");
  } else {
    alert("Please Complete the forms");
    console.log("failed");
  }
}
