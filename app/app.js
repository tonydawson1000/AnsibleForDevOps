// Load the express module
var express = require('express');
var app = express();

// Respond to requests for / with 'Hello World'
app.get('/', function(req, res){
    res.send('Hello Node.js World!');
});

// Listen on port 3000
app.listen(3000);

console.log('Express server started successfully');