application.controller('search_controller', function($scope) {
	$scope.getByFilter = function(text_filter) {
		var studentsList = [
			{
				'total_name': 'Roman Statkevich',
				'faculty': 'FICT',
				'course': 3
			},
			{
				'total_name': 'Vasiya Pupkin',
				'faculty': 'PTI',
				'course': 2
			}
		];

		var filter = text_filter;
		var test = studentsList.map(function(currentValue, index, array) {
			return currentValue.total_name.indexOf(filter) != -1 ?
				currentValue : null;
		})
		test = test.reduce(function(previous, current, index) {
			if(current!=null)
				previous.push(current);
			else 
				previous.concat([]);
			return previous;
		}, [])
		$scope.data = test;
	}

}) 