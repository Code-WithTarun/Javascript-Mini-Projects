const passBox = document.getElementById("passBox")
let length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTQUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstquvwxyz";
const numbers  = "1234567890";
const symbols = "!@#$%^&*_=+-"
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePass(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]
    password += symbols[Math.floor(Math.random()*symbols.length)]

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }
    passBox.value = password;
}

function copyPass(){
    passBox.select();
    document.execCommand("copy")
}