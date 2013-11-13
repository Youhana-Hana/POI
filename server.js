var app = require('./app.js');

var port = process.env.PORT || 3000; 

app.listen(port, function(e) {
	console.log('server.listen');  

	if (e) {
		console.error('failed to start listening', { port: port, error: e });
		process.exit(1);
	}

	if (process.send) {
		console.log('server online', { port: port });
		process.send('online');
	}
});

process.on('message', function(message) {
	console.log('process message ' + message);
	if (message === 'shutdown') {
		console.log('server shutting down', { port: port });
	process.exit(0);
  }
});
