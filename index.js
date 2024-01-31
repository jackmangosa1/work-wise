const redirectToAnotherPage = (url) => {
  window.location.href = url;
};

const validateLoginForm = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.getElementById("emailError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";

  if (email.trim() === "") {
    document.getElementById("emailError").innerHTML =
      "Please enter your email.";
    return false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML =
      "Please enter a valid email address.";
    return false;
  }

  if (password.trim() === "") {
    document.getElementById("passwordError").innerHTML =
      "Please enter your password.";
    return false;
  }

  if (password.trim().length < 8 || password.trim().length > 16) {
    document.getElementById("passwordError").innerHTML =
      "Your password should be between 8 and 16 characters.";
    return false;
  }

  return true;
};

const validateSignUpForm = () => {
  document.getElementById("firstNameError").innerHTML = "";
  document.getElementById("lastNameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("emergencyPhoneError").innerHTML = "";
  document.getElementById("addressError").innerHTML = "";
  document.getElementById("departmentError").innerHTML = "";
  document.getElementById("positionError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("confirmPasswordError").innerHTML = "";

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("telephone-number").value;
  let emergencyPhone = document.getElementById("emergency-phone-number").value;
  let address = document.getElementById("address").value;
  let department = document.getElementById("department").value;
  let position = document.getElementById("position").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (firstName.trim() === "") {
    document.getElementById("firstNameError").innerHTML =
      "Please enter your first name.";
    return false;
  }

  if (lastName.trim() === "") {
    document.getElementById("lastNameError").innerHTML =
      "Please enter your last name.";
    return false;
  }

  if (email.trim() === "") {
    document.getElementById("emailError").innerHTML =
      "Please enter your email.";
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML =
      "Please enter a valid email address.";
    return false;
  }

  if (phone.trim() === "") {
    document.getElementById("phoneError").innerHTML =
      "Please enter your telephone number.";
    return false;
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").innerHTML =
      "Please enter a valid 10-digit phone number.";
    return false;
  }

  if (emergencyPhone.trim() === "") {
    document.getElementById("emergencyPhoneError").innerHTML =
      "Please enter an emergency contact number.";
    return false;
  }

  if (!phoneRegex.test(emergencyPhone)) {
    document.getElementById("emergencyPhoneError").innerHTML =
      "Please enter a valid 10-digit emergency contact number.";
    return false;
  }

  if (address.trim() === "") {
    document.getElementById("addressError").innerHTML =
      "Please enter your address.";
    return false;
  }

  if (department.trim() === "") {
    document.getElementById("departmentError").innerHTML =
      "Please enter your department.";
    return false;
  }

  if (position.trim() === "") {
    document.getElementById("positionError").innerHTML =
      "Please enter your position.";
    return false;
  }

  if (password.trim() === "") {
    document.getElementById("passwordError").innerHTML =
      "Please enter your password.";
    return false;
  }

  if (password.trim().length < 8 || password.trim().length > 16) {
    document.getElementById("passwordError").innerHTML =
      "Your password should be between 8 and 16 characters.";
    return false;
  }

  if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").innerHTML =
      "Passwords do not match.";
    return false;
  }

  return true;
};
