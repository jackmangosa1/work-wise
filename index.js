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
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("confirmPasswordError").innerHTML = "";

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
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
