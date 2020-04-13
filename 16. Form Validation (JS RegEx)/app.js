// Form blur event listeners
document.querySelector('#name').addEventListener('focusout', validateName);
document.querySelector('#zip').addEventListener('focusout', validateZip);
document.querySelector('#email').addEventListener('focusout', validateEmail);
document.querySelector('#phone').addEventListener('focusout', validatePhone);

function validateName() {
    const nameUI = document.querySelector('#name');
    const regEx = /^[A-Za-z]{2,10}$/

    if (regEx.test(nameUI.value)) {
        nameUI.classList.remove('is-invalid');
        nameUI.classList.add('is-valid');
    } else {
        nameUI.classList.remove('is-valid');
        nameUI.classList.add('is-invalid');
    }
}

function validateZip() {
    const zipUI = document.querySelector('#zip');
    const regEx = /^[0-9]{6}?$/

    if (regEx.test(zipUI.value)) {
        zipUI.classList.remove('is-invalid');
        zipUI.classList.add('is-valid');
    } else {
        zipUI.classList.remove('is-valid');
        zipUI.classList.add('is-invalid');
    }
}

function validateEmail() {
    const emailUI = document.querySelector('#email');
    const regEx = /^([\w\-\.]+)@([\w\-\.]+)\.([A-Za-z]{2,5})$/

    if (regEx.test(emailUI.value)) {
        emailUI.classList.remove('is-invalid');
        emailUI.classList.add('is-valid');
    } else {
        emailUI.classList.remove('is-valid');
        emailUI.classList.add('is-invalid');
    }
}

function validatePhone() {
    const phoneUI = document.querySelector('#phone');
    const regEx = /^\+998[-. ]\(?\d{2}\)?[-. ]?\d{3}[-. ]?\d{2}[-. ]?\d{2}$/

    if (regEx.test(phoneUI.value)) {
        phoneUI.classList.remove('is-invalid');
        phoneUI.classList.add('is-valid');
    } else {
        phoneUI.classList.remove('is-valid');
        phoneUI.classList.add('is-invalid');
    }
}
