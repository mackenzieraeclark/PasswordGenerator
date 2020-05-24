// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare Variables
//ARRAYS
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacter = ["~", "!", "@", "#", "$", "%", "&", "*", "?"];

//confirming the arrays in the console
console.log(uppercase);
console.log(lowercase);
console.log(number);
console.log(specialCharacter);

// Declare variables to be used for user prompts
var confirmLength = "";
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmSpecialCharacter;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
