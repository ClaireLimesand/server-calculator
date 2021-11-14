$(document).ready(onReady);
let equationInput = {};
let addition = false;
let subtraction = true;

function onReady() {
    console.log('jquery working');
    $('#equalButton').on('click', handleEqualButton);
    $('#plusButton').on('click', handlePlusButton);
    $('#minusButton').on('click', handleMinusButton);
    $('#multiplyButton').on('click', handleMultiplyButton);
    $('#divideButton').on('click', handleDivideButton);
};

function handlePlusButton() {
    addition = true;
    subtraction = false;
    multiplication = false;
    division = false;
};

function handleMinusButton() {
    addition = false;
    subtraction = true;
    multiplication = false;
    division = false;
};

function handleMultiplyButton() {
    addition = false;
    subtraction = false;
    multiplication = true;
    division = false;
};

function handleDivideButton() {
    addition = false;
    subtraction = false;
    multiplication = false;
    division = true;
};

function handleEqualButton() {
    let inputOne = $('#firstNumber').val();
    let inputTwo = $('#secondNumber').val()
    equationInput = {
        firstNumber: inputOne,
        secondNumber: inputTwo,
    }; 
    if ( addition === true ){
        equationInput.type = '+'
    } else if ( subtraction === true ){
        equationInput.type = '-'
    } else if ( multiplication === true ){
        equationInput.type = '*'
    } else if ( division === true ){
        equationInput.type = '/'
    }
    console.log('please tell me this worked', equationInput);
    calculateEquation();
};
    
    
    
function calculateEquation() {
    $.ajax ({
        method: 'POST',
        url: '/equationInput',
        data: equationInput,
    }).then ((response) => {
        console.log('in POST');
    }).catch ((error) => {
        console.log('boo')
    })
};



