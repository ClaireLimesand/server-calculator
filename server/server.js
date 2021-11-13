const express = require('express');
// load the express library from node
const app = express();
// create our "app" AKA server 
app.use(express.static('./server/public'));
// tell express where to find our client files 
app.listen(5000, function() {
    console.log('this server is running')
});
// listens for requests and declares port5000 
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
// idk what this stuff does but our group project had it so here it is 