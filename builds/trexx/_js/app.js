var myApp = angular.module('myApp',[]);

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