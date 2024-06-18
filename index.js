const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("generate-btn");
const passwordSettingsBtn = document.getElementById("password-settings-btn");
const passwordSettingsDiv = document.getElementById("password-settings-div");
const optionOne = document.getElementById("option-one");
const optionTwo = document.getElementById("option-two");
const copyBtnOne = document.getElementById("copy-btn-one");
const copyBtnTwo = document.getElementById("copy-btn-two");
const passwordContainerOne = document.getElementById("password-container-one");
const passwordContainerTwo = document.getElementById("password-container-two");

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

generateBtn.addEventListener("click", function() {
    const firstPassword = generatePassword();
    const secondPassword = generatePassword();
    optionOne.value = firstPassword;
    optionTwo.value = secondPassword;
});

function generatePassword() {
    const passwordLength = Number(document.getElementById("password-length").value);
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        let char = getRandomCharacter();
        generatedPassword += char;
    }
    return generatedPassword;
}

copyBtnOne.addEventListener("click", function() {
    copyPassword(optionOne);
});

copyBtnTwo.addEventListener("click", function() {
    copyPassword(optionTwo);
});

function copyPassword(option) {
    option.select()
    option.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(option.value);
    alert("Password has been copied to clipboard.");
}

function showPasswordOptions() {
    if (passwordSettingsDiv.style.display === "none") {
        passwordSettingsDiv.style.display = "block";
    } else {
        passwordSettingsDiv.style.display = "none";
    }
}

passwordSettingsBtn.addEventListener("click", function() {
    showPasswordOptions();
});