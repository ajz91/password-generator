//assignment code here
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
var Symbols = ['!', '@','#','$','%','^','&','*','(',')','_','+','<','>','?'];
var Numbers = ['1','2','3','4','5','6','7','8','9','0'];

function generatePassword() {
  var length = window.prompt("Length of password? 8-128 characters");
  length = parseInt(length)
  if (isNaN (length) === true) {
    window.alert("You must enter a number!")
    return;
  }

  if (length < 8 || length > 128 ) {
    window.alert("Length must be between 8 and 128 characters")
    return;
  }

  var isUpperCase = window.confirm("Uppercase characters?");


  var isLowerCase = window.confirm("Lowercase characters?");


  var isSymbols = window.confirm("Symbols?");


  var isNumbers = window.confirm("Numbers?");
  if (isUpperCase === false && isLowerCase === false && isSymbols === false && isNumbers === false) {
    window.alert("You must at least pick one!")
    return;
  }

  var possibleCharacters = []
  if (isUpperCase === true) {
    possibleCharacters = possibleCharacters.concat(upperCase)
  }
  if (isLowerCase === true) {
    possibleCharacters = possibleCharacters.concat(lowerCase)
  }
  if (isSymbols === true) {
    possibleCharacters = possibleCharacters.concat(Symbols)
  }
  if (isNumbers === true) {
    possibleCharacters = possibleCharacters.concat(isNumbers)
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var passLength = 