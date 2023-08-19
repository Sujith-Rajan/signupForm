function validateFirstName() {
    let firstName = document.getElementById("fname").value;
    let fnameError = document.getElementById("fnameError");
    let regexfname = /^[A-Za-z\s'-]+$/;

    if (regexfname.test(firstName)) {
        fnameError.textContent = " ";
        return true;
    } else {
        fnameError.textContent = "*User first name must be valid";
        return false;
    }
}
function validateSecondName() {
    let lastName = document.getElementById("lname").value;
    let lnameError = document.getElementById("lnameError");
    let regexfname = /^[A-Za-z\s'-]+$/;

    if (regexfname.test(lastName)) {
        lnameError.textContent = " ";
        return true;
    } else {
        lnameError.textContent = "*User last name must be valid";
        return false;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let regexmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (regexmail.test(email)) {
        emailError.textContent = " ";
        return true;
    } else {
        emailError.textContent = "*Please enter valid email address";
        return false;
    }
}

function validateTel() {
    let number = document.getElementById("number").value;
    let numberError = document.getElementById("numberError");
    let regexnumber = /^(\+\d{1,3})?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;

    if (regexnumber.test(number)) {
        numberError.textContent = "";
        return true;
    } else {
        numberError.textContent = "*Please enter valid phone number";
        return false;
    }
}

function validatePswd() {
    let pswd = document.getElementById("pswd").value;
    let pswdError = document.getElementById("pswdError");
    let regexPswd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (regexPswd.test(pswd)) {
        pswdError.textContent = "";
        return true;
    } else {
        pswdError.textContent =
            "*Requires at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character";
        return false;
    }
}
function validateCnfmPswd() {
    let pswd = document.getElementById("pswd").value;
    let cpswd = document.getElementById("cpswd").value;
    let cpswdError = document.getElementById("cpswdError");

    if (cpswd === pswd) {
        cpswdError.textContent = "";
        return true;
    } else {
        cpswdError.textContent = " *Your password mismatch";
        return false;
    }
}
