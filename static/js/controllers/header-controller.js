application
	.controller('header_controller',['$scope','userService', function($scope,userService) {
		$scope.user = userService.user();
	}])
	.controller('profile_controller',[function($scope,userService) {
		$scope.userData = {
			username: 'IcedNecro',
			firstName: 'Roman',
			lastName: 'Statkevich',
			birth_day: new Date(1996, 05, 08)
		};

		$scope.skills = ['python', 'java','JS', 'angular.js']
	}])