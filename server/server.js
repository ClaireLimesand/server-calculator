const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let equationData = [];

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// I have truly no idea what the bodyParser thing is doing. It was in our group project so I included
// it here but I'm not sure what it does

// this get function sends back equationData
app.get('/equation', (req, res) => {
    console.log('in GET')
    res.send(equationData);
});

// this take equationInput data and runs the calculate function
app.post('/equationInput', (req, res) => {
    console.log('in POST', req.body);
    calculate(req.body);
    res.sendStatus(201);
});

// this checks the object type and equates based on that 
function calculate(object){
    if (object.type === '+'){
        object.total = Number(object.firstNumber) + Number(object.secondNumber);
    } else if (object.type === '-'){
        object.total = Number(object.firstNumber) - Number(object.secondNumber);
    } else if (object.type === '*'){
        object.total = Number(object.firstNumber) * Number(object.secondNumber);
    } else if (object.type === '/'){
        object.total = Number(object.firstNumber) / Number(object.secondNumber);
    }
    // i push this information to my equation data array 
    equationData.push(object);
    console.log(equationData)
}

app.listen(5000, function() {
    console.log('this server is running')
})
