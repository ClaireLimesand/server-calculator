const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let history = [];

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// I have truly no idea what the bodyParser thing is doing. It was in our group project so I included
// it here but I'm not sure what it does

app.post('/equationInput', (req, res) => {
    console.log('in Post')
    calculate(req.body);
});

function calculate(object){
    let answer = 0;
    if (object.type === '+'){
        answer = Number(object.firstNumber) + Number(object.secondNumber)
    } else if (object.type === '-'){
        answer = Number(object.firstNumber) - Number(object.secondNumber)
    } else if (object.type === '*'){
        answer = Number(object.firstNumber) * Number(object.secondNumber)
    } else if (object.type === '/'){
        answer = Number(object.firstNumber) / Number(object.secondNumber)
    }
    console.log('the answer is:', answer)
    return answer;
};

app.listen(5000, function() {
    console.log('this server is running')
});

// history.push(`${object.firstNumber} + ${object.secondNumber} = ${answer}`)