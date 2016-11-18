var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = 8000;
var mongoose = require('mongoose');

app.use(express.static(path.join(__dirname + '/client')));
app.use(express.static(path.join(__dirname + '/bower_components')));

app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, 'localhost', function(){
	console.log('listening on port: ' + port);
});