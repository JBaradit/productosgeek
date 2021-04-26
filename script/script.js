const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const checkbox = document.getElementById('checkbox');
var aux = 0;
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();

});


function validate() {
    if (document.getElementById('checkbox').checked) {
        checkbox.value = true;
    } else {
        checkbox.value = false;
    }
}




function checkInputs() {
    // trim to remove the whitespaces
    validate();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const checkboxValue = checkbox.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Por favor, ingrese su nombre');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Por favor, ingrese su email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email no valido');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Por favor, ingrese una contraseña');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Por favor, confirme su contraseña');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Las contraseñas no coinciden');
    } else {
        setSuccessFor(password2);
    }

    if (validate()) {
        setSuccessForCheck(checkbox);
    } else {
        setErrorForCheck(checkbox, 'Por favor, ingrese una contraseña');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'input-group form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-group form-control success';
}

function setErrorForCheck(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-check error';
    small.innerText = message;
}

function setSuccessForCheck(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-check success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}