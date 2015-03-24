var blapp = angular.module( 'blapp', [] );

blapp.controller( 'blappCtrl', function ($scope) {
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
});