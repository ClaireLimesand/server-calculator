$(document).ready(onReady);
let eqationInput = {};
let addition = false;
let subtraction = false;

function onReady() {
    console.log('jquery working');
    $('#equalButton').on('click', handleEqualButton);
    $('#plusButton').on('click', handlePlusButton);
    $('#minusButton').on('click', handleMinusButton);
};

function handlePlusButton() {
    addition = true;
    subtraction = false;
};

function handleMinusButton() {
    addition = false;
    subtraction = true;
};

function handleEqualButton() {
    let inputOne = $('#firstNumber').val();
    let inputTwo = $('#secondNumber').val()
    equationInput = {
        firstNumber: Number(inputOne),
        secondNumber: Number(inputTwo),
    }; 
    if ( addition = true ){
        equationInput.type = '+'
    } else if ( subtraction = true ){
        equationInput.type = '-'
    }
    console.log('please tell me this worked', eqationInput);
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



