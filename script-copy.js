// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lettersArr = ["a", "b", "c", "d", "e", "f", "g"];
var specialCharactersArr = ["?", "!", "#", "%"];

function generatePassword() {
  var newPassword = "";
  var finalArr = [];

  var criteriaNum = prompt("Enter y or n to use numbers?");
  console.log(criteriaNum);
  var criteriaSpecial = prompt("Enter y or n to use special characters?");
  console.log(criteriaSpecial);
  var criteriaUpper = prompt("Enter y or n to use uppercase?");
  console.log(criteriaUpper);
  var criteriaLower = prompt("Enter y or n to use lowercase?");
  console.log(criteriaLower);

  var lengthPassword = prompt(
    "Pick a number of characters for your password between 8 and 128"
  );
  var criteriaList = {
    number: criteriaNum,
    special: criteriaSpecial,
    upper: criteriaUpper,
    lower: criteriaLower
  };
  // If user enters "n" for all
  if (
    criteriaList.number === "n" &&
    criteriaList.special === "n" &&
    criteriaUpper === "n" &&
    criteriaLower === "n"
  ) {
    alert("You need to answer y to at least one criteria!");
    return;
  }
  // If user enters yes for numbers generate a password that is lengthPassword
  if (criteriaList.number === "y") {
    finalArr = finalArr.concat(numbersArr);
    var randomNum = numbersArr[Math.floor(Math.random() * numbersArr.length)];
    newPassword += randomNum;
  }
  // If user enters yes for special character generate a passward that is howLong
  if (criteriaList.special === "y") {
    finalArr = finalArr.concat(specialCharactersArr);
    var randomSpeChar =
      specialCharactersArr[
        Math.floor(Math.random() * specialCharactersArr.length)
      ];
    newPassword += randomSpeChar;
  }
  // If user enters yes for uppercase generate a password only of uppercase letters
  if (criteriaList.upper === "y") {
    var uppercaseLettersArr = lettersArr.map(letter => letter.toUpperCase()); //function(letter){return letter.toUpperCase()}
    finalArr = finalArr.concat(uppercaseLettersArr);
    var randomUpper =
      uppercaseLettersArr[
        Math.floor(Math.random() * uppercaseLettersArr.length)
      ];
    newPassword += randomUpper;
  }

  // If user enter ues for lowercase generate a password only of lowercase letters
  if (criteriaList.lower === "y") {
    finalArr = finalArr.concat(lettersArr);
    var randomLower = lettersArr[Math.floor(Math.random() * lettersArr.length)];
    newPassword += randomLower;
  }
  var remainingLength = lengthPassword - newPassword.length;
  for (var i = 0; i < remainingLength; i++) {
    var randomPasswordString =
      finalArr[Math.floor(Math.random() * finalArr.length)];
    newPassword += randomPasswordString;
  }
  console.log(newPassword);
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password

// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria

// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password

// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
