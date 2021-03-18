// arrays for characters; lowercase, uppercase, numeric, special char

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y','z']
var uppercase = lowercase.map(function(x){ return x.toUpperCase(); });
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]


// function to receive user input for password options:
function getPasswordOptions() {
  // length variable stores the number user enters
  var length = parseInt(
    prompt("How long would you like your password to be?\n(Please enter a numeric value between 8 and 128 characters long.)"));

      // if to validate a numeral was entered
      if (isNaN(length) === true) {
        alert("Please provide length as a number.");
      } 
      // if to confirm between 8 and 128
      else if (length < 8 || length > 128) {
        length = parseInt(prompt("Please enter a value between 8 and 128."));
        return;
      }
      // old code not needed: if statement to validate response was entered
      // else if (!length) {
      //   alert("Please enter a numeric value between 8 and 128 to begin.");
      // }

    
    // else valid length, resumes storing rest of choices as variables
    else {
    var hasLowercase = confirm("Click OK to include Lowercase letters");
    var hasUppercase = confirm("Click OK to include Uppercase letters");
    var hasNumber = confirm("Click OK to include numbers");
    var hasSpecial = confirm("Click OK to include special characters");

    // validation that at least one criteria was chosen
      if (!hasLowercase && !hasUppercase && !hasNumber && !hasSpecial) {
          choices = alert("You must choose at least one criteria!");
          return;
      }
    }
  
  // storing all options in an object
  var passwordOptions = {
    passwordLength: length,
    hasUppercaseCharacters: hasUppercase,
    hasLowercaseCharacters: hasLowercase,
    hasNumberCharacters: hasNumber,
    hasSpecialCharacters: hasSpecial
  };

  return passwordOptions;

} 

// function that creates the password:

function generatePassword() {
  // initialize the password string to build on
  let generatedPassword = "";
  let allChoices = [];
  // filter out types not wanted
  // loop over length
  // call over each type
  // add final password to password variable to be returned
  
  var options = getPasswordOptions();

  if (options.hasLowercaseCharacters) {
    allChoices = allChoices.concat(lowercase);
  }

  if (options.hasUppercaseCharacters) {
    allChoices = allChoices.concat(uppercase);
  }
  
  if (options.hasNumberCharacters) {
    allChoices = allChoices.concat(numeric);
  }

  if (options.hasSpecialCharacters) {
    allChoices = allChoices.concat(special);
  }

  for (let i = 0; i < options.passwordLength; i++) {
    let newRandom = allChoices[Math.floor(Math.random() * allChoices.length)];
    generatedPassword += newRandom;
  } 
  return generatedPassword;
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// copy to clipboard:

var copyToClipBoard = document.getElementById("password");

function copytoClipboard() {

  document.getElementById("password").select();

  document.execCommand("Copy");

  alert("Your password has now been copied to the clipboard");

}
copyToClipBoard.addEventListener('click', copytoClipboard);
