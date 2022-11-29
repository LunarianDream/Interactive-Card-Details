'use strict';

///// Form Variables

let form = document.querySelector('#card_details');
let confirm_button = document.querySelector('.form_submit');
let continue_button = document.querySelector('.continue');

let cardholder = document.querySelector('#cardholder');
let cardnumber = document.querySelector('#cardnumber');
let month = document.querySelector('#month');
let year = document.querySelector('#year');
let CVC = document.querySelector('#CVC');

let input = document.querySelectorAll('input');
let small = document.querySelectorAll('small');

////////////////////

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

});

const cardValidation = function () {
    let check_cardholder = cardholder.value;
    let check_cardnumber = cardnumber.value;
    let check_month = month.value.trim();
    let check_year = year.value.trim();
    let check_CVC = CVC.value.trim();
    let isValid = true;

    if (check_cardholder === '') {
        setErrorFor(cardholder, `Can't be blank`);
        isValid = false;
    } else {
        isValid
    };

    if (check_cardnumber == '') {
        setErrorFor(cardnumber, `Can't be blank`)
        isValid = false
    } else {
        isValid
    }

    if (check_month == '') {
        setErrorFor(month, `Can't be blank`)
        isValid = false
    } else {
        isValid
    }

    if (check_year == '') {
        setErrorFor(year, `Can't be blank`)
        isValid = false 
    } else {
        isValid
    }

    if (check_CVC == '') {
        setErrorFor(CVC, `Can't be blank`)
        isValid = false
    } else {
        isValid
    }
}

const setErrorFor = function(field, message) {

    for (let i = 0; i < input.length; i++) {
            if (input[i].value == '') {
                input[i].style.borderColor = 'var(--inputError)';
                input[i].nextElementSibling.innerText = message;
                input[i].nextElementSibling.style.color = 'var(--inputError)'
            }
    };


    // for (let i = 0; i < small.length; i++) {
    //     small[i].innerText = message
    //     small[i].style.color = 'var(--inputError)'
    // }
    

    console.log(message)
};

confirm_button.addEventListener('click', cardValidation);