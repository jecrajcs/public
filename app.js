// Load ExpressJS
var express = require('express');

// Create the Express app
var app = express();

// Create route URI with name as a parameter
app.use('/getname/:name', function(req, resp){
	
	// Send response back to the client by calling send method which uses getName(name) method that generate a name using given name and append that with a randomly generated number within 6 and 15.
	resp.send(getName(req.params.name));
});

// getName Method definition
function getName(name){
	
	// return name with random number
	// Here 15 is higher limit value so (15-6 = 9) and 6 is the lower limit value
	return name+Math.floor((Math.random() * 9) + 6);
}

// Set port on which ExpressJS Server will listen
app.set('port', process.env.PORT || 3000);

// Actual server listening
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});