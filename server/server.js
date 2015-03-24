var express = require( 'express' ),
	socketio = require('socket.io');
app = express();

app.get( '/', function( req, res ) {
	console.log( 'Hello World' );
	res.send( 'Hello World' );
});

app.use( express.static( './client' ) );

exports.init = function( port ) {
	console.log( 'Starting to listen on port ' + port ); 
	var server = app.listen( port );
	var io = socketio( server );

	io.on('connection', function (socket) {
		socket.emit('news', { hello: 'world' });
		socket.on('newrating', function (data) {
			console.log(data);
			data.rating += 1;
			socket.emit( 'ratingupdate', data );
		});
	});
};