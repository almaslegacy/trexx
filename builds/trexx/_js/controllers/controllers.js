var infoController = angular.module('infoController',[]);

infoController.controller('MyinfoController', function InfoController($scope) {
	$scope.info = {
		'name' : 'Travis Ray',
		'shortname' : 'Trayy',
		'startdate' : 'July 2014'
	}
});

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


