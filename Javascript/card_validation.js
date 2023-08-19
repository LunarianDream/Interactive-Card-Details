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



/////////////////////////////////
form.addEventListener('submit', (e) => {
    e.preventDefault();
    cardValidation;
});

function formatCardNumber () {

    if (cardnumber.value.length == 4 ) {
        return cardnumber.value = '' + cardnumber.value.slice(0,4) + ' '
    }

    if (cardnumber.value.length == 9) {
        return cardnumber.value = '' + cardnumber.value.slice(0,4) + ' ' + cardnumber.value.slice(5,9) + ' '
    }

    if (cardnumber.value.length == 14) {
        return cardnumber.value = '' + cardnumber.value.slice(0,4) + ' ' + cardnumber.value.slice(5,9) + ' ' + cardnumber.value.slice(10,14) + ' '
    }

    return null 
    
}

const cardValidation = function() {

    let isValid = true

/* ==================== 
If fields are empty 
======================= */

    for (let i = 0; i < input.length; i++) {
            if (input[i].value == '') {
                input[i].style.borderColor = 'var(--inputError)';
                input[i].nextElementSibling.style.display = 'inline';
                input[i].nextElementSibling.innerText = `Can't be blank`;
                isValid = false;
            };
    };

/* ==================== 
Cardholder Name
======================= */

            if(cardholder.value.match('[0-9]+')) {
                cardholder.style.borderColor = 'var(--inputError)';
                cardholder.nextElementSibling.style.display = 'inline';
                cardholder.nextElementSibling.innerText = `Can't contain numbers`;
                isValid = false;
            };

/* ==================== 
Cardnumber
======================= */

            if (cardnumber.value.match('[a-z]+')) {
                cardnumber.style.borderColor = 'var(--inputError)';
                cardnumber.nextElementSibling.style.display = 'inline';
                cardnumber.nextElementSibling.innerText = `Can't contain letters`;
                isValid = false;
            }

/* ==================== 
Month
======================= */

            if (month.value.match('[a-z]+')) {
                month.style.borderColor = 'var(--inputError)';
                year.nextElementSibling.style.display = 'inline';
                year.nextElementSibling.innerText = `Can't contain letters`;
                isValid = false;
            }

/* ==================== 
Year
======================= */

            if (year.value.match('[a-z]+')) {
                year.style.borderColor = 'var(--inputError)';
                year.nextElementSibling.style.display = 'inline';
                year.nextElementSibling.innerText = `Can't contain letters`;
                isValid = false;
            }

/* ==================== 
CVC
======================= */

            if (CVC.value.match('[a-z]+')) {
                CVC.style.borderColor = 'var(--inputError)';
                CVC.nextElementSibling.style.display = 'inline';
                CVC.nextElementSibling.innerText = `Can't contain letters`;
                isValid = false;
            }

/* ==================== 
Entire Card Validation
======================= */

            if (isValid == true) {
                cardInfo.style.display = 'none'
                confirmation.style.display = 'flex';                
            }
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
cardnumber.addEventListener('input', () => {
    formatCardNumber();
    let ccNumber = (""+ cardnumber.value).replace(/[A-Za-z]/g, "")
    cardnumber.value = ccNumber;
    let finalCardNumber = ccNumber;
    

    frontCardNumbers.innerText = finalCardNumber;

    if (ccNumber == "") {
        return frontCardNumbers.innerText = "0000 0000 0000 0000";
    };

    
});

/* ==================== 
Front Cardholder Name
======================= */

cardholder.addEventListener('input', () => {
    frontCardName.innerText = cardholder.value;

    if (cardholder.value == "") {
        frontCardName.innerText = "Jane Appleseed";
    };
});

/* ==================== 
Front Card Month
======================= */
month.addEventListener('input', () => {
    frontCardMonth.innerText = month.value;

    if (month.value == "") {
        frontCardMonth.innerText = "00";
    };
});

/* ==================== 
Front Card Year
======================= */

year.addEventListener('input', () => {
    frontCardYear.innerText = year.value;

    if (year.value == "") {
        frontCardYear.innerText = "00";
    };
});

/* ==================== 
Back Card CVC
======================= */

CVC.addEventListener('input', () => {
    backCardCVC.innerText = CVC.value;

    if (CVC.value == "") {
        backCardCVC.innerText = "000";
    };
});

/////////////////////////////////
/* Buttons */
/////////////////////////////////

confirm_button.addEventListener('click', cardValidation);
continue_button.addEventListener('click', () => {
    form.reset();
    confirmation.style.display = 'none';
    cardInfo.style.display = 'block';
    for (let i = 0; i < small.length; i++) {
        small[i].style.display = 'none';
    };
    for (let i = 0; i < input.length; i++) {
        input[i].style.borderColor = 'var(--lightGrayishViolet)';
    };
});
