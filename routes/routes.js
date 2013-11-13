var landing = require('./landing');

var routes = {};

routes.ui = function(app) {
	console.log('routes.ui');

	app.get('/', landing.get);
 };

module.exports = routes;
