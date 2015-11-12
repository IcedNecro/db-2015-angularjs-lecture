application.controller("authController", ['$scope','userService', function($scope, userService){
	$scope.submit = function() {
		userService.loginRequest($scope.login, $scope.password)
	}
}])