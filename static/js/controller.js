var application = angular.module('app',[]);

application.controller('profile_controller', function($scope) {
	$scope.userData = {
		username: 'IcedNecro',
		firstName: 'Roman',
		lastName: 'Statkevich',
		birth_day: new Date(1996, 05, 08)
	};

	$scope.skills = ['python', 'java','JS', 'angular.js']
})