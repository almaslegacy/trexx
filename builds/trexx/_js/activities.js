var ActivitiesController = angular.module('ActivitiesController',[]);

ActivitiesController.controller('ActivitiesController', ['$scope', '$http', function ($scope, $http) {
	$http.get('js/data.json').success(function(data)	{
		$scope.activities = data;
		});
}]); //Activities Controller