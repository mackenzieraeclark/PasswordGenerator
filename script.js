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

// Create function to generate password

function generatePassword() {
    alert("Your password should contain between 8 and 128 characters.");
    confirmLength = (prompt("How many characters would you like in your unique password?"));

    //Create a while LOOP to make sure the answer is within the criteria
    while(confirmLength <= 7 || confirmLength >= 128) {
        alert("Your password length must be between 8 and 128 characters. Please enter a number within the given criteria.");
        confirmLength = (prompt("How many characters would you like in your unique password?"));
    }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
