// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseCharacters ='abcdefghijklmnopqrstuvwxyz';

function generateLowercase() {
    let result = '';
    const charactersLength = lowercaseCharacters.length;
        result += lowercaseCharacters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}

var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateUppercase() {
  let result = '';
  const charactersLength = uppercaseCharacters.length;
      result += uppercaseCharacters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

var numbers = '1234567890';

function generateNumber() {
  let result = '';
  const charactersLength = numbers.length;
      result += numbers.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

var specialChars = '!"#$%&()*+,-./:;<=>?@[^]_`{|}~-';

function generateSpecialChar() {
  let result = '';
  const charactersLength = specialChars.length;
      result += specialChars.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

// function generatePassword(){
//   var passwordLength = document.getElementById("#characterLength").value;
//   var lowercase = document.getElementById("#lowercase").value;
//   var numeric = document.getElementById("#numeric").value;
//   var uppercase = document.getElementById("#uppercase").value;
//   var specialChars = document.getElementById("#specialChars").value;
//   const password = [];
//   for (let i = 0; i < passwordLength ; i++){
//     if (lowercase){
//       password.push= generateLowercase();
//       i++;
//     }
//     if (uppercase){
//       password.push= generateUppercase();
//       i++;
//     }
//     if (numeric){
//       password.push= generateNumber();
//       i++;
//     }
//     if (specialChars){
//       password.push= generateSpecialChar();
//       i++;
//     }
//   }
//   let text = password.toString();
//   console.log(text);
//   return text;
// }

// Write password to the #password input
function writePassword() {
  var passwordText = '';
  passwordText = document.querySelector("#password");
  let passwordLength = Number(window.prompt("Choose the length of a password (8-128)", ""));
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = Number(window.prompt("Length must be between 8 and 128", ""));
  }
  const lowercase= confirm("Would you like lowercase characters in your password (ok for yes/ cancel for no)");
  const numeric = confirm("Would you like numeric characters in your password (ok for yes/ cancel for no)");
  const uppercase = confirm("Would you like uppercase characters in your password (ok for yes/ cancel for no)");
  const specialChars = confirm("Would you like special characters in your password (ok for yes/ cancel for no)");
  if (lowercase )
  let password = '';
  for (let i = 0; i < passwordLength ; i){
    if (lowercase && i< passwordLength){
      password += generateLowercase();
      i++;
    }
    if (uppercase && i< passwordLength){
      password += generateUppercase();
      i++;
    }
    if (numeric && i < passwordLength){
      password += generateNumber();
      i++;
    }
    if (specialChars && i< passwordLength){
      password += generateSpecialChar();
      i++;
    }
    else {
      i++;
    }
  }
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log(generateLowercase());
// console.log(generateUppercase());
// console.log(generateNumber());
// console.log(generateSpecialChar());