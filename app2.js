//Require module
var Server = require('node-srv');

// Start server
var srv = new Server(
	{
		port: 3002,
		logs: true,
	},
	function () {
		console.log('Server stopped');
	}
);
