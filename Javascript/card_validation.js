'use strict';

///// Form Variables

let form = document.querySelector('#card_details');
let confirm_button = document.querySelector('.form_submit');
let continue_button = document.querySelector('.continue');

let cardInfo = document.querySelector('.card_info');
let confirmation = document.querySelector('.confirmation');

let cardholder = document.querySelector('#cardholder');
let cardnumber = document.querySelector('#cardnumber');
let month = document.querySelector('#month');
let year = document.querySelector('#year');
let CVC = document.querySelector('#CVC');

let input = document.querySelectorAll('input');
let small = document.querySelectorAll('small');

let isValid = true

/////////////////////////////////
form.addEventListener('submit', (e) => {
    e.preventDefault();
    cardValidation;
});
const cardValidation = function() {

/* ==================== 
If fields are empty 
======================= */

    for (let i = 0; i < input.length; i++) {
            if (input[i].value == '') {
                input[i].style.borderColor = 'var(--inputError)';
                input[i].nextElementSibling.style.display = 'inline';
                input[i].nextElementSibling.innerText = `Can't be blank`;
                isValid = false;

/* ==================== 
Cardholder Name
======================= */

            } else if(cardholder.value.match('[0-9]+')) {
                cardholder.style.borderColor = 'var(--inputError)';
                cardholder.nextElementSibling.style.display = 'inline';
                cardholder.nextElementSibling.innerText = `Can't contain numbers`;
                isValid = false;

/* ==================== 
Cardnumber
======================= */

            } else if (cardnumber.value.match('[a-z]+')) {
                cardnumber.style.borderColor = 'var(--inputError)';
                cardnumber.nextElementSibling.style.display = 'inline';
                cardnumber.nextElementSibling.innerText = `Can't contain letters`;
                isValid = false;

/* ==================== 
Month
======================= */

            } else if (month.value.match('[a-z]+')) {
                month.style.borderColor = 'var(--inputError)';
                year.nextElementSibling.style.display = 'inline';
                year.nextElementSibling.innerText = `Can't contain letters`;
                isValid = false;

/* ==================== 
Year
======================= */

            } else if (year.value.match('[a-z]+')) {
                year.style.borderColor = 'var(--inputError)';
                year.nextElementSibling.style.display = 'inline';
                year.nextElementSibling.innerText = `Can't contain letters`;
                isValid = false;

/* ==================== 
CVC
======================= */

            } else if (CVC.value.match('[a-z]+')) {
                CVC.style.borderColor = 'var(--inputError)';
                CVC.nextElementSibling.style.display = 'inline';
                CVC.nextElementSibling.innerText = `Can't contain letters`;
                isValid = false;

/* ==================== 
Entire Card Validation
======================= */

            } else if (isValid == true) {
                cardInfo.style.display = 'none'
                confirmation.style.display = 'flex';                
            }
        };
};

/////////////////////////////////
/* Card and Form Matching */
/////////////////////////////////

let frontCardNumbers = document.querySelector('.front_card_numbers');
let frontCardName = document.querySelector('.front_card_name');
let frontCardMonth = document.querySelector('.front_card_month');
let frontCardYear = document.querySelector('.front_card_year');
let backCardCVC = document.querySelector('.back_card_CVC');

/* ==================== 
Front Card Number
======================= */
cardnumber.addEventListener('keyup', () => {
    frontCardNumbers.innerText = cardnumber.value;
});

/* ==================== 
Front Cardholder Name
======================= */

cardholder.addEventListener('keyup', () => {
    frontCardName.innerText = cardholder.value;
});

/* ==================== 
Front Card Month
======================= */
month.addEventListener('keyup', () => {
    frontCardMonth.innerText = month.value;
});

/* ==================== 
Front Card Year
======================= */

year.addEventListener('keyup', () => {
    frontCardYear.innerText = year.value;
});

/* ==================== 
Back Card CVC
======================= */

CVC.addEventListener('keyup', () => {
    backCardCVC.innerText = CVC.value;
})

/////////////////////////////////
/* Buttons */
/////////////////////////////////

confirm_button.addEventListener('click', cardValidation);
continue_button.addEventListener('click', () => {
    confirmation.style.display = 'none';
    cardInfo.style.display = 'block';
    input[i].style.borderColor = 'var(--lightGrayishViolet';
    input[i].nextElementSibling.style.display = 'none';
});
