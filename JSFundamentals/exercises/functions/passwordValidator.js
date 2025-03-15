function passwordValidator(password) {
    let isValidLength = checkValidLength(password);
    let isAlphanumeric = checkAlphaNumeric(password);
    let hasMinimumDigits = checkMinimumDigits(password);

    if (isValidLength && isAlphanumeric && hasMinimumDigits) {
        console.log("Password is valid");
    }

    function checkValidLength(pass) {
        if (pass.length < 6 || pass.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }

        return true;
    }
    
    function checkAlphaNumeric (pass) {
        let pattern = /^[a-zA-Z0-9]+$/;

        if (!pattern.test(pass)) {
            console.log("Password must consist only of letters and digits");
            return false;
        }
        return true;
    }

    function checkMinimumDigits (pass) {
        let pattern = /\d.*\d/;

        if (!pattern.test(pass)) {
            console.log("Password must have at least 2 digits");
            return false;
        }

        return true;
    }

}

passwordValidator('Pa$s$s')
passwordValidator('logIn')
passwordValidator('MyPass123')