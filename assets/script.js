// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// arrays to select from
const lowerCase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChar = ['!', '"', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


function characterAmt() {
  var characterPrompt = parseInt(window.prompt("How many characters in your password? (8-128)"));
  // Conditional Recursive Function Call
  if (characterPrompt < 8 || characterPrompt > 128 || characterPrompt === "" || characterPrompt === null) {
    window.alert("You need to provide a valid answer! Please try again.")
    // use return to call it again and stop the rest of this function from running
    return characterAmt()
    
  };
  return characterPrompt
}

// function 

console.log(characterAmt())

// Write password to the #password input
function writePassword() {
  window.alert("Let's generate a password!")
  characterAmt()
  var genPassword = []
  var confirmLower = confirm("Do you want lowercase letters?")
  var confirmUpper = confirm("Do you want uppercase letters?")
  var confirmNum = confirm("Do you want numbers?")
  var confirmSpecial = confirm("Do you want special characters?")

    if (confirmLower === true) {
      genPassword.push (lowerCase[Math.floor(Math.random()*lowerCase.length)])
    }
    
    if (confirmUpper === true) {
      genPassword.push (upperCase[Math.floor(Math.random()*upperCase.length)])
    }

    if (confirmNum === true) {
      genPassword.push (numbers[Math.floor(Math.random()*numbers.length)])
    }

    if (confirmSpecial === true) {
      genPassword.push (specialChar[Math.floor(Math.random()*specialChar.length)])
    }
 return genPassword
  }




// var password = generatePassword();
// var passwordText = document.querySelector("#password");
// passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


// to-do list
// math.random and math.round to select something at random from an array and round to pick a whole number
// use Robot Gladiators to understand the logic in the window alert functions
//


// confirmLower();
// confirmUpper(); 
// confirmSpecial();