// Assignment Code
var generateBtn = document.querySelector("#generate");

var numerics = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialCharacters = ["!", "~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+"]

// Write password to the #password input
function writePassword() {
  var password = getUserInputs();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function 

function getUserInputs() {
  var passwordLengthMax = prompt("enter required password max length");
  if (isNaN(passwordLengthMax)) {
    alert("password length must be a number")
    return
  }
  if (passwordLengthMax < 8 || passwordLengthMax > 128) {
    alert("password length must be between 8-128 characters")
    return
  }
  var includeLowercase = confirm("include lowercase?");
  var includeUppercase = confirm("should include uppercase?");
  var numeric = confirm("should include numeric?");
  var includeSpecialCharacters = confirm("should include special characters?");
  if (!includeLowercase || !includeUppercase || !numeric || !includeSpecialCharacters) {
    alert("at least one type must be selected")
    return
  }
  console.log(includeLowercase)
  return generatePassword(passwordLengthMax, includeLowercase, includeUppercase, numeric, includeSpecialCharacters);
}
// function
function getRandomItem(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}
// function
function generatePassword(passwordLengthMax, includeLowercase, includeUppercase, numeric, includeSpecialCharacters) {
  var output = []
  var draft = []
  var confirmed = []
  if (includeLowercase) {
    draft = draft.concat(lowercase)
    confirmed.push(getRandomItem(lowercase))
  }
  if (includeUppercase) {
    draft = draft.concat(uppercase)
    confirmed.push(getRandomItem(uppercase))
  }
  if (numeric) {
    draft = draft.concat(numerics)
    confirmed.push(getRandomItem(numerics))
  }
  if (includeSpecialCharacters) {
    draft = draft.concat(specialCharacters)
    confirmed.push(getRandomItem(specialCharacters))
  }
  for (var i = 0; i < passwordLengthMax; i++) {
    output.push(getRandomItem(draft))
  }
  for (var i = 0; i < confirmed.length; i++) {
    output[i] = confirmed[i]
  }
  return output.join("")
}
