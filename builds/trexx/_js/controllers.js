var infoControllers = angular.module('infoControllers',[]);

infoControllers.controller('ActivitiesController', ['$scope', '$http', function($scope, $http) {
	$http.get('data.json').success(function(data) {
		$scope.activities = data;
		$scope.activitiesOrder = 'Date';
		});
}]); //Activities Controller

infoControllers.controller('ActivityController', ['$scope', '$http', 'routeParams', function($scope, $http) {
	$http.get('data.json').success(function(data) {
		$scope.activities = data;
		$scope.whichItem = $routeParams.itemId;
		});
}]); //Activity Controller


