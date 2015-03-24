var blapp = angular.module( 'blapp' );

blapp.controller( 'blappCtrl', function ($scope) {
	socket.on( 'ratingupdate', function (data) {
		console.log(data);
		$scope.$apply( function() {
			$scope.bleus.push(data);
		});
	});
	$scope.bleus = [
		{
			'name': 'Restaurant Sonne',
			'rating': 5.6
		},
		{
			'name': 'Eintracht',
			'rating': 3.4
		}
	];
	$scope.sendToServer = function( data ) {
		socket.emit('newrating', data );
		console.log( 'wuah!', data );
	};
});



var socket = io.connect('http://localhost:8080');
socket.on('news', function (data) {
	console.log(data);
	socket.emit('my other event', { my: 'data' });
});