//Require module
var Server = require('node-srv');

// Start server
var srv = new Server(
	{
		port: 3001,
		logs: true,
	},
	function () {
		console.log('Server stopped');
	}
);
