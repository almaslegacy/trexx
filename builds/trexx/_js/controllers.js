var infoController = angular.module('infoController',[]);

infoController.controller('ActivitiesController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.activities = data;
		$scope.activitiesOrder = 'Date';
		});
}]); //Activities Controller

infoController.controller('ActivityController', ['$scope', '$http', 'routeParams', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.activities = data;
		$scope.whichItem = $routeParams.itemId;
		});
}]); //Activities Controller


