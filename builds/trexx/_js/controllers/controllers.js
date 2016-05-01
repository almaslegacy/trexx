myApp.controller('MyController', function MyController($scope) {
	$scope.info = {
		'name' : 'Travis Ray',
		'shortname' : 'Trayy',
		'startdate' : 'July 2014'
	}
});

myApp.controller('ActivitiesController', function ActivitiesController($scope, $http) {
	$http.get('data.json').success(function(data)	{
		$scope.activities = data;
		});
}); //Activities Controller