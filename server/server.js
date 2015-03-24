var express = require( 'express' );
app = express();

app.get( '/', function( req, res ) {
	console.log( 'Hello World' );
	res.send( 'Hello World' );
});

app.use( express.static( './client' ) );

exports.init = function( port ) {
	console.log( 'Starting to listen on port ' + port ); 
	app.listen( port );
};