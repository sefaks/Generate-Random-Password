
const passwordBox = document.getElementById('password')
const length = 12;


const upperCase="ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lowerCase= "abcdefgijklmnopqrstuvxyz";
const number="0123456789";

const allChars = upperCase + lowerCase + number;

function generatePassword(){

    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];

while(length>password.length){

    password += allChars[Math.floor(Math.random()*allChars.length)];
}
passwordBox.value = password

}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
  }
