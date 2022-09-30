// Заполнение шкалы
function rangeChange() {
    const range = document.getElementById("input-temp");
     range.style.background = "linear-gradient(90deg, #ff69b4 " + range.value + "%, #5baaf9 " + range.value + "%";
}

// Валидация форм
let inputs = document.querySelectorAll('.form__input-txt'),
    formBody = document.querySelector('.form__input-body'),
    subBtn = document.querySelector('.form__submit-btn'),
    nameInput = document.querySelector('#input-name'),
    commentsInput = document.querySelector('#input-comments'),
    tempInput = document.querySelector('#input-temp'),
    phoneInput = document.querySelector('#input-phone');

function validatePhone(phone) {
    let reg = /(\+7)(\s)(\()(\d{3})\)(\s)(\d{3})(\-)(\d{2})(\-)(\d{2})/;
    return reg.test(String(phone));
}

phoneInput.addEventListener('input', function () {
    if(!validatePhone(phoneInput.value)) {
        phoneInput.classList.add("form__input--error");
        console.log('Телефон не подходит');
        return false;
    } else {
        phoneInput.classList.remove("form__input--error");
    }
    
    if (phoneInput.value == "") {
        phoneInput.classList.remove("form__input--error");
    }
});

formBody.onsubmit = function () {
    let emptyInputs = Array.from(inputs).filter(input => input.value === ''),
        phoneLabel = document.querySelector('#input-phone-label');

    inputs.forEach(function(input) {
        if (!input.value) {
            input.classList.add("form__input--error");
            input.placeholder = 'Поле должно быть заполнено';
            
        } else {
            input.classList.remove("form__input--error");
            input.placeholder = '';
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('Поля не заполнены');
    }

    if(!validatePhone(phoneInput.value)) {
        phoneInput.classList.add("form__input--error");
        phoneLabel.textContent ='Phone (Введите телефон в формате +7 (XXX) XXX-XX-XX)';
        console.log('Телефон не подходит');
    } else {
        phoneInput.classList.remove("form__input--error");
    }

    if (validatePhone(phoneInput.value) && (emptyInputs.length == 0)) {
        console.log('Имя: ' + nameInput.value);
        console.log('Номер телефона: ' + phoneInput.value);
        console.log('Температура: ' + tempInput.value);
        console.log('Комментарий: ' + commentsInput.value);
    }
    return false;
}
