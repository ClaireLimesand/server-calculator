$(document).ready(onReady);

// declare global variables
let equationInput = {};

let addition;
let subtraction;
let multiplication;
let division;

function onReady() {
    console.log('jquery working');
    renderHistory();
    $('#equalButton').on('click', handleEqualButton);
    $('#plusButton').on('click', handlePlusButton);
    $('#minusButton').on('click', handleMinusButton);
    $('#multiplyButton').on('click', handleMultiplyButton);
    $('#divideButton').on('click', handleDivideButton);
    $('#clearButton').on('click', handleClearButton);
}

// these functions check what kind of equation it is, only
// the correct variable will be true
function handlePlusButton() {
    addition = true;
    subtraction = false;
    multiplication = false;
    division = false;
}

function handleMinusButton() {
    addition = false;
    subtraction = true;
    multiplication = false;
    division = false;
}

function handleMultiplyButton() {
    addition = false;
    subtraction = false;
    multiplication = true;
    division = false;
}

function handleDivideButton() {
    addition = false;
    subtraction = false;
    multiplication = false;
    division = true;
}

function handleEqualButton() {
    // takes the user inputs and put them into an object
    let inputOne = $('#firstNumber').val();
    let inputTwo = $('#secondNumber').val()
    equationInput = {
        firstNumber: inputOne,
        secondNumber: inputTwo,
    }; 
    // checks which equation type is true and puts that into 
    // equationInput as well
    if ( addition === true ){
        equationInput.type = '+'
    } else if ( subtraction === true ){
        equationInput.type = '-'
    } else if ( multiplication === true ){
        equationInput.type = '*'
    } else if ( division === true ){
        equationInput.type = '/'
    }
    console.log('Equation input:', equationInput);
    // run calculateEquation function
    calculateEquation();
}

function calculateEquation() {
    // clear input fields
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    // make a post request sending my equationInput
    $.ajax ({
        method: 'POST',
        url: '/equationInput',
        data: equationInput,
    }).then ((response) => {
        console.log('response', response)
        renderHistory()
    }).catch ((error) => {
        console.log('error', error)
    })
}

function renderHistory() {
    $.ajax({
        method: 'GET',
        url: '/equation'
    }).then((response) => {
        console.log('response', response);
        // clear history
        $('#history').empty();
        // loop through the response
        for (let number of response) {
            // append the response to DOM
            $('#history').append(`
                <li>${number.firstNumber} ${number.type} ${number.secondNumber} = ${number.total}</li>
            `);
        }  
         // answer area and append my response.total to the DOM
        $('#finalAnswer').empty();
        $('#finalAnswer').append(`
        ${response[response.length - 1].total}
        `); 
        }).catch((error) => {
        console.log('error', error);
    });
}

// clear my input values and history
function handleClearButton() {
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('#history').empty();
}