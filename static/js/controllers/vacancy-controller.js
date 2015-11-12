application.controller('feedController', function($scope, $http) {
	$scope.page = 0;
	$scope.next = function() {
		$scope.page++;
		$scope.getFeed();
	}

	$scope.prev = function() {
		$scope.page--;
		$scope.getFeed()
	}

	$scope.getFeed = function() {
		var params = {
			'page': $scope.page
		}
		$http({
			'url': '/feed',
			'method':'GET',
			'params':params,
		})
		.success(function(data, status, headers, config) {
			$scope.vacancies = data.data;
		})
		.error(function(data) {
			console.log('error occured')
		})
	}
	$scope.getFeed()
})