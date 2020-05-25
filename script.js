// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare Variables
//ARRAYS
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacter = ["~", "!", "@", "#", "$", "%", "&", "*", "?"];

//confirming the arrays in the console
// console.log(uppercase);
// console.log(lowercase);
// console.log(number);
// console.log(specialCharacter);

// Declare variables to be used for user prompts
var confirmLength = 0;
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

    // Prompt user for specific criteria
    confirmUppercase = confirm("Click OK to include uppercase characters.");
    confirmLowercase = confirm("Click OK to include lowercase characters.");
    confirmNumber = confirm("Click OK to include numbers.");
    confirmSpecialCharacter = confirm("Click OK to include special characters.");
    
    // Create a while LOOP to make sure the user has confirmed at least one parameter
    while(confirmUppercase === false && confirmLowercase === false && confirmNumber === false && confirmSpecialCharacter === false) {
        alert("Please confirm at least one of these criteria in order increase your password strength.");
        confirmUppercase = confirm("Click OK to include uppercase characters.");
        confirmLowercase = confirm("Click OK to include lowercase characters.");
        confirmNumber = confirm("Click OK to include numbers.");
        confirmSpecialCharacter = confirm("Click OK to include special characters.");
    }

     // Declare variable to hold characters for user criteria based password
    var passwordCharacters = [];

    // create IF statements to call arrays (BOOLEAN)
    if (confirmUppercase === true){
        passwordCharacters = passwordCharacters.concat(uppercase);
        // console.log(passwordCharacters);
    }
    if (confirmLowercase === true){
        passwordCharacters = passwordCharacters.concat(lowercase);
        // console.log(passwordCharacters);
    }
    if (confirmNumber === true){
        passwordCharacters = passwordCharacters.concat(number);
        // console.log(passwordCharacters);
    }
    if (confirmSpecialCharacter === true){
        passwordCharacters = passwordCharacters.concat(specialCharacter);
        // console.log(passwordCharacters);
    }

    // Declare variable for string
    var randomPassword = "";

    // FOR LOOP to make random password at user specific length
    for (var i=0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }
    return randomPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
