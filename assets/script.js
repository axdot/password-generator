// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// arrays to select from
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "01234567890";
const specialChar = "!#$%&'()*+,-./<=>?@[]^_`{}|~";


// Write password to the #password input
function genPassword() {
  window.alert("Let's generate a password!")

    
    var characterPrompt = parseInt(prompt("How many characters in your password? (8-128)"));
    if (characterPrompt < 8 || characterPrompt > 128 || characterPrompt === "" || characterPrompt === null) {
      alert("You need to provide a valid answer! Please try again.")
      return genPassword();
    }

console.log(characterPrompt)

  var characterAmt = "";
  var confirmLower = confirm("Do you want to include lowercase letters?")
  var confirmUpper = confirm("Do you want to include uppercase letters?")
  var confirmNum = confirm("Do you want to include numbers?")
  var confirmSpecial = confirm("Do you want to include special characters?")

    if (!confirmLower && !confirmUpper && !confirmNum && !confirmSpecial) {
      alert("You have selected to have no password. Let's try again!")
      return genPassword();
    }
    
  while (characterAmt.length < characterPrompt) {
    
    if (confirmLower) {
      characterAmt += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        if (characterAmt.length === characterPrompt) {
          break;
        }
      }
      
    if (confirmUpper) {
      characterAmt += upperCase[Math.floor(Math.random() * upperCase.length)];
        if (characterAmt.length === characterPrompt) {
          break;
        }
      }

    if (confirmNum) {
      characterAmt += numbers[Math.floor(Math.random() * numbers.length)];
        if (characterAmt.length === characterPrompt) {
          break;
        }
      } 

    if (confirmSpecial) {
      characterAmt += specialChar[Math.floor(Math.random() * specialChar.length)];
        if (characterAmt.length === characterPrompt) {
          break;
        }
      }
    };

  return characterAmt
}

function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

