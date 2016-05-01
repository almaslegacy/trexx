myApp.controller('ActivitiesController', ['$scope', '$http'], function ($scope, $http) {
	$http.get('data.json').success(function(data)	{
		$scope.activities = data;
		});
}); //Activities Controller