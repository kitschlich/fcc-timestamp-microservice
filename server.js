'use strict';

var express = require('express'),
	routes = require('./app/routes/index.js');

var app = express();

routes(app);

app.use('/public', express.static(process.cwd() + '/public'));

app.listen(process.env.PORT, function () {
    console.log('Listening on port ' + process.env.PORT + "...");
});
