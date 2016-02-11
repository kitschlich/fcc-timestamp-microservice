'use strict';

var parseDate = require('../modules/parseDate.js');

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
    app.route('/:param')
    	.get(function (req, res) {
    		res.json(parseDate(req.params.param));
		});
};
