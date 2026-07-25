// Get all the elements we need
var passwordOutput = document.getElementById("passwordOutput");
var lengthRange = document.getElementById("lengthRange");
var lengthValue = document.getElementById("lengthValue");
var uppercaseCheck = document.getElementById("uppercase");
var lowercaseCheck = document.getElementById("lowercase");
var numbersCheck = document.getElementById("numbers");
var symbolsCheck = document.getElementById("symbols");
var generateBtn = document.getElementById("generateBtn");
var copyBtn = document.getElementById("copyBtn");
var copyMsg = document.getElementById("copyMsg");

// Character to build the password
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var symbolChars = "!@#$%^&*()_+-=[]{}";

// Update the length number 
lengthRange.addEventListener("input", function () {
  lengthValue.textContent = lengthRange.value;
});


generateBtn.addEventListener("click", function () {
  var length = lengthRange.value;

  var charPool = "";
  if (uppercaseCheck.checked) {
    charPool = charPool + uppercaseChars;
  }
  if (lowercaseCheck.checked) {
    charPool = charPool + lowercaseChars;
  }
  if (numbersCheck.checked) {
    charPool = charPool + numberChars;
  }
  if (symbolsCheck.checked) {
    charPool = charPool + symbolChars;
  }

  if (charPool === "") {
    passwordOutput.value = "";
    copyMsg.textContent = "Please select at least one option!";
    copyMsg.style.color = "red";
    return;
  }

  // Build the password by character
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    password = password + charPool.charAt(randomIndex);
  }

  passwordOutput.value = password;
  copyMsg.textContent = "";
});

// Copy password to clipboard when copy icon is clicked
copyBtn.addEventListener("click", function () {
  if (passwordOutput.value === "") {
    copyMsg.textContent = "Nothing to copy yet!";
    copyMsg.style.color = "red";
    return;
  }

  passwordOutput.select();
  document.execCommand("copy");

  copyMsg.textContent = "Password copied!";
  copyMsg.style.color = "#27ae60";
});
