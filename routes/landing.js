var landing = {};

landing.get = function(req, res) {
	console.log('landing.get');
	
	return res.render('landing');
 };

module.exports = landing;
