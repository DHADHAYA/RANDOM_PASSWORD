const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_!~}{}[]></-=";

const allChars = upperCase + lowerCase + number  + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Maths.random() * upperCase.length)];
    password += lowerrCase[Math.floor(Maths.random() * lowerCase.length)];
    password += number[Math.floor(Maths.random() * number.length)];
    password += symbol[Math.floor(Maths.random() * symbol.length)];

     while(length > password.length){
        password += allChars[Math.floor(Maths.random() * allChars.length)];
     }
     passwordBox.value = password;

}