let uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numeric = ["0","1","2","3","4","5","6","7","8","9"]
let specialCharacters = ["!","@","#","$","%","^","&","*",]
let password = []
let chars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*",]


// Assignment code here
function generatePassword(){
  var length = prompt("How long is your password?")
// Conditional statement to check if password length is at least 8 to 128 characters long
  if (length<8||length>128)
  {
    alert("password must contain 8-123 characters")
    return
  }
  var upper = confirm("Does your password have uppercase letters?")
  var lower = confirm("Does your password contain any lowercase letters?")
  var isNumeric = confirm("Does your password contain any numbers?")
  var isSpecialCharacters = confirm("Does your password have any special characters?")

  
  if (upper) {
    var upper = uppercase[Math.floor(Math.random() * uppercase.length)];
    password.push(upper)
  }
  if (lower) {
    var lower = lowercase[Math.floor(Math.random() * lowercase.length)];
    password.push(lower)
  }
  if (isNumeric) {
    var mynumeric = numeric[Math.floor(Math.random() * numeric.length)];
    password.push(mynumeric)
  }

  if (isSpecialCharacters) {
    var myspecialCharacters = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    password.push(myspecialCharacters)

  }
  
  
  return password
}




  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  




// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  // let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]"
  // let lengthofPassword = 123;
  // var password = "";
  





passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

