application.service('userService',['$http', function($http) {
	var loginRequest = function(login, password) {
		var postData = {
			login: login,
			password: password
		}
		$http.post('url', postData).success(function(data, status, headers, config) {

		})
	} 
	var user = function() {
		return {
			'name': 'Roman',
			'surname': 'Statkevich'
		}
	}
	return {
		loginRequest: loginRequest,
		user:user
	}
}])