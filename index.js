const container = document.getElementsByClassName('.container');
const passwordShowHide = document.querySelector('.showHidePw');
const passwordField = document.querySelectorAll('.password');
const signup_links = document.querySelectorAll('.signup-link');
const login_links = document.querySelectorAll('.login-link');
const login = document.querySelector('.login');
const registration = document.querySelector('.registration');
const reset_password = document.querySelector('.reset-password');
const reset = document.getElementById('reset');


passwordShowHide.addEventListener('click', () => {
  passwordField.forEach(passwordField => {
    if(passwordField.type === "password") {
      passwordField.type = "text";
      passwordShowHide.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      passwordField.type = "password";
      passwordShowHide.classList.replace("fa-eye", "fa-eye-slash");
    }
  })
})

signup_links.forEach(signup_link => {
  signup_link.addEventListener('click',() => {
    login.classList.toggle("active");
    registration.classList.toggle('active');
    if(reset_password.classList.contains( "active" )) {
      reset_password.classList.toggle("active");
      login.classList.toggle('active');
    }
  })
})

login_links.forEach(login_link => {
  login_link.addEventListener('click',() => {
    login.classList.toggle("active");
    registration.classList.toggle('active');
    if(reset_password.classList.contains( "active" )) {
      reset_password.classList.toggle("active");
      registration.classList.toggle('active');
    }
  })
})

reset.addEventListener('click',() => {
  reset_password.classList.toggle("active");
  login.classList.toggle("active");
})
