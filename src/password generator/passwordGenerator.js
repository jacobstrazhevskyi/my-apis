/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */

/* eslint-disable indent */
const output = document.getElementById('output');
const textValueOfRange = document.getElementById('rangeValue');
const passLength = document.getElementById('passwordLen');
const generateButton = document.getElementById('generate-button');
textValueOfRange.innerHTML = passLength.value;

// eslint-disable-next-line func-names
passLength.oninput = function () {
  textValueOfRange.innerHTML = passLength.value;
};

const symbols = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'.split('');

function generatePassword() {
    let password = '';

    for (let i = passLength.length; i >= 0; i--) {
        password += symbols[Math.floor(Math.random() * symbols.length)];
    }

    output.value = password;

    return password;
}

generateButton.onclick = generatePassword;

console.log(generatePassword());
