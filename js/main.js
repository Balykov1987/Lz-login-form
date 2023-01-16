document.addEventListener("DOMContentLoaded", function () {

    let login = document.getElementById('login');
    let register = document.getElementById('register');

    let loginForm = document.getElementById('login-form');
    let registerForm = document.getElementById('register-form');

    let LoginEye = document.getElementById('log_eye');
    let LoginPassword = document.getElementById('login_password');

    let RegisterEye = document.getElementById('reg_eye');
    let RegisterPassword = document.getElementById('register_password');

    switchElements();
    changeForm();
    visiblePassword();
    registerPassword();

    function switchElements() {
        login.addEventListener("click", function () {
            if (!login.classList.contains('switch__active')) {
                login.classList.add('switch__active');
                register.classList.remove('switch__active');
            }
        })
        register.addEventListener("click", function () {
            if (!register.classList.contains('switch__active')) {
                register.classList.add('switch__active');
                login.classList.remove('switch__active');
            } else {
                register.classList.remove('switch__active');
            }
        })
    }

    function changeForm() {
        login.addEventListener("click", function () {
            if (!loginForm.classList.contains('form__active')) {
                loginForm.classList.add('form__active');
                registerForm.classList.remove('form__active');
            }
        })
        register.addEventListener("click", function () {
            if (!registerForm.classList.contains('form__active')) {
                registerForm.classList.add('form__active');
                loginForm.classList.remove('form__active');
            } else {
                registerForm.classList.remove('form__active');
            }
        })
    }

    function visiblePassword() {
        LoginEye.addEventListener("click", function () {
            if (LoginPassword.type === "password") {
                LoginPassword.type = "text";
                LoginEye.style.opacity = "0.5";
            } else {
                LoginPassword.type = "password";
                LoginEye.style.opacity = "1";
            }
        });
    }

    function registerPassword() {
        RegisterEye.addEventListener("click", function () {
            if (RegisterPassword.type === "password") {
                RegisterPassword.type = "text";
                RegisterEye.style.opacity = "0.5";
            } else {
                RegisterPassword.type = "password";
                RegisterEye.style.opacity = "1";
            }
        })
    }

})
