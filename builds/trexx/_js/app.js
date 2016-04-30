var myApp = angular.module('myApp',
  ['ngRoute', 'firebase'])
  .constant('FIREBASE_URL', 'https://trexx.firebaseIO.com/');

function MyController($scope) {
$scope.info = {
	'name' : 'Travis Ray',
	'shortname' : 'Trayy',
	'startdate' : 'July 2014'
	}
};

myApp.run(['$rootScope', '$location',
  function($rootScope, $location) {
    $rootScope.$on('$routeChangeError',
      function(event, next, previous, error) {
        if (error=='AUTH_REQUIRED') {
          $rootScope.message = 'Sorry, you must log in to access that page';
          $location.path('/login');
        } // AUTH REQUIRED
      }); //event info
  }]); //run

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/dashboard', {
      templateUrl: '_views/dashboard.html',
      controller: 'DashboardController'
    }).
    when('/feed', {
      templateUrl: '_views/register.html',
      controller: 'FeedController'
    }).
    when('/log', {
      templateUrl: '_views/log.html',
      controller: 'LogController'
    }).
    when('/activity', {
      templateUrl: '_views/activity.html',
      controller: 'LogController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //current Auth
      } //resolve
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);