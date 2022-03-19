// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// arrays to select from
var lowerCase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


// Write password to the #password input
function writePassword() {
  window.alert("Let's generate a password!")
  var characterAmt = window.prompt("How many characters in your password? (8-128)")
  var confirmLower = window.confirm("Do you want lowercase letters?")
  var confirmUpper = window.confirm("Do you want uppercase letters?")
  var confirmSpecial = window.confirm("Do you want special characters?")

  characterAmt();
  confirmLower();
  confirmUpper();
  confirmSpecial();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// to-do list
// math.random and math.round to select something at random from an array and round to pick a whole number
// use Robot Gladiators to understand the logic in the window alert functions
//