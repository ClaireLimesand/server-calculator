const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.post('/equationInput', (req, res) => {
    console.log('in Post')
    console.log(req.body);
    if (req.body.type === '+'){
        
    }
});



app.listen(5000, function() {
    console.log('this server is running')
});
