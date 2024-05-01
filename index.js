const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", function() {
    let passwordLength = 15
    let pwd1 = ""
    let pwd2 = ""

    for (let i=0; i<passwordLength; i++) {
        let randomNumber1 = Math.floor(Math.random() * characters.length)
        let randomNumber2 = Math.floor(Math.random()* characters.length)
        pwd1 += characters[randomNumber1]
        pwd2 += characters[randomNumber2]
    }

    let pwdButton1 =  document.getElementById("pwd-btn-1")
    let pwdButton2 =  document.getElementById("pwd-btn-2")
    
    pwdButton1.textContent = pwd1
    pwdButton2.textContent = pwd2
})