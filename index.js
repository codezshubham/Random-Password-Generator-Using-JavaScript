const passwordbox = document.getElementById("password");
const length = 12;

const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase = "abcdefghijklmnopqrstuvwxyz"
const Number = "0123456789"
const symbol = "`~!@#$%^&*/?-_"

const allChars = Uppercase + Lowercase + Number + symbol;

function createPassword() {
    let password = "";
        while(length > password.length) {
            password += Uppercase[Math.floor(Math.random() * Uppercase.length)];
            password += Lowercase[Math.floor(Math.random() * Lowercase.length)];
            password += Number[Math.floor(Math.random() * Number.length)];
            password += symbol[Math.floor(Math.random() * symbol.length)];
            password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordbox.value = password;
    }

    function copyPassword() {
        passwordbox.select ();
        document.execCommand("copy")
    }

