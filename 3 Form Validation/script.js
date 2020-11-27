var form = document.forms.regform;
var spanErrorText = document.getElementsByClassName('error-text');
var inputArea = document.getElementsByClassName('form-box__area');
const plz = 'Plz, fill the field';
const fmt = 'Correct format: ';

var clearErrorText = () => {
    for (let n = 0; n < spanErrorText.length; n++) {
        spanErrorText[n].innerText = ' ';
    }
};

var clearInputArea = () => {
    for (let n = 0; n < inputArea.length; n++) {
        let classList = inputArea[n].classList;
        console.log(classList);

        if (classList.contains('input_error') === true) {
            classList.remove("input_error");
            classList.remove("p_error");
        }
    }
};

//form 
var formValidation = function(e) {
    e.preventDefault();
    console.log('Run validation');

    clearErrorText(); //очистка ВСЕХ текстов с ошибками
    clearInputArea(); //очистка красной рамки в input с ошибками

    let name = form.elements.name;
    let mail = form.elements.email;
    let phone = form.elements.phone; 
    
    let result = true;

    if (nameValidation(name) == false) {
        
        result = false;
    }

    if (mailValidation(mail) == false) {
        result = false;
    }

    if (phoneValidation(phone) == false) {
        result = false;
    }

    if (result == false) {
        document.getElementById('form-box__area__headline').innerText = "wrong data!"
    }
    if (result == true) {
        document.getElementById('form-box__area__headline').innerText = "Ok"
    }
    
    return result;
};

//name
var nameValidation = (name) => {
    console.log('funcNameValid');
    
    let regexp = /^[A-Za-zА-Яа-я ]+$/;

    if (name.value == '') {
        spanErrorText[0].innerText = plz;
        return false;
    }
    if (name.value.match(regexp)) { 
        return true;
    } else {
        spanErrorText[0].innerText = (fmt + 'A-Z/a-z/А-Я/а-я');
        name.classList.add("input_error");
        name.classList.add("p_error");
        name.focus();
        return false;
    }
};

//mail
var mailValidation = (mail) => {
    console.log('funcMailValid');
    
    let regexp = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
    
    if (mail.value == '') {
        spanErrorText[1].innerText = plz;
        return false;
    }
    if (mail.value.match(regexp)) { 
        return true;
    } else {
       
        spanErrorText[1].innerText = (fmt + 'mymail@mail.ru, or my.mail@mail.ru, or my-mail@mail.ru.');
        mail.classList.add("input_error");
        mail.classList.add("p_error");
        mail.focus();
        return false;
    }
};

//phone
var phoneValidation = (phone) => {
    console.log('funcPhoneValid');
    
    let regexp = /^\+\d{1}\(\d{3}\)\d{3}-\d{4}$/;
    
    if (phone.value == '' ||  phone.value == '+7(000)000-0000') {
        spanErrorText[2].innerText = plz;
        return false;
    }

    if (phone.value.match(regexp)) { 
        return true;
    } else {
       
        spanErrorText[2].innerText = (fmt + '+7(000)000-0000');
        phone.classList.add("input_error");
        phone.classList.add("p_error");
        phone.focus();
        return false;
    }
};