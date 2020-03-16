var char = 'abcdefghijklmnopqrstuvwxyz'
var uchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var num = '0123456789'
var schar = '!"#$%&()*+,-./<>=?@_`~|^'
var password = ""


var howMany = prompt("how many charcters would you like? Must be between 8-128")

  if (howMany >= 8 && howMany <= 128) {

    var upper = confirm("would you like uppercase letters?");
    if (upper === true) {
        password += uchar;
    }

    var lower = confirm("would you like lowercase letters?");
    if (lower === true) {
        password += char;
    }

    var numbers = confirm("would you like numbers?");
    if (numbers === true) {
        password += num;
    }

    var special = confirm("would you like special characters?");
    if (special === true) {
        password += schar;
    }
}

else{confirm("must be bewtween 8 and 128 characters")
document.location.reload()}
    
console.log(password)
function generate() {
 var answer = "";
 for (i = 1; i <= howMany; i++) {
    answer += password.charAt(Math.floor(Math.random() * (password.length)));
    }
    document.getElementById("text1").value = answer;
   
}
console.log(generate());
function copyPassword(){
 
   document.getElementById("text1").select();
   document.execCommand("Copy");
   alert("password has been copied");

}
