myApp.controller('ActivitiesController', function ActivitiesController($scope, $http) {
	$http.get('data.json').success(function(data)	{
		$scope.activities = data;
		});
}); //Activities Controller