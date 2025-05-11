function validate() {
  const userNameInput = document.querySelector("#username");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const passwordConfirmInput = document.querySelector("#confirm-password");
  const validMessageDiv = document.querySelector('#valid');

  const companyFieldset = document.querySelector("#companyInfo");
  const companyInput = document.querySelector("#companyNumber");

  const isCompanyCheckBox = document.querySelector("#company");
  const submitButton = document.querySelector("#submit");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const isValidName = nameValidator();
    const isValidEmail = emailValidator();
    const areValidPasswords = passwordValidator();
    const isValidCompanyNumber = companyNumberValidator();

    if (isValidName && isValidEmail && areValidPasswords && isValidCompanyNumber) {
      validMessageDiv.style.display = 'block'
    } else {
      validMessageDiv.style.display = 'none'
    }
   
  });

  isCompanyCheckBox.addEventListener("change", () => {
      companyFieldset.style.display = isCompanyCheckBox.checked ? "block" : "none";
    
  });

  const nameValidator = function () {
    const path = /^[A-Za-z0-9]{3,20}$/g;
    if (!path.test(userNameInput.value)) {
      userNameInput.style.borderColor = "red";
      return false;
    } else {
      userNameInput.style.borderColor = "";
      return true;
    }
  };

  const emailValidator = function () {
    const path = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/g;

    if (!path.test(emailInput.value)) {
      emailInput.style.borderColor = "red";
      return false;
    } else {
      emailInput.style.borderColor = "";
      return true;
    }
  };

  const passwordValidator = function () {
    const path = /^\w{5,15}$/;
  
    const password = passwordInput.value;
    const confirmPassword = passwordConfirmInput.value;
  
    const isValidPassword = path.test(password);
    const doPasswordsMatch = password === confirmPassword;
  
    if (isValidPassword && doPasswordsMatch) {
      passwordInput.style.borderColor = '';
      passwordConfirmInput.style.borderColor = '';
      return true;
    } else {
      passwordInput.style.borderColor = 'red';
      passwordConfirmInput.style.borderColor = 'red';
      return false;
    }
  };

  const companyNumberValidator = function () {
    if (!isCompanyCheckBox.checked) {
      return true;
    }
    const number = Number(companyInput.value);
    if (number < 1000 || number > 9999) {
      companyInput.style.borderColor = "red";
      return false;
    } else {
      companyInput.style.borderColor = "";
      return true;
    }
  };
  
}
