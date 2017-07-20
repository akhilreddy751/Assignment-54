var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(app.get('port'), function(){
	console.log('server has started on Port :' + app.get('port'));
});