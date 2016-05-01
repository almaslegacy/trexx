var myApp = angular.module('myApp', ['ngRoute', 'infoControllers']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
     when('/activities', {
      templateUrl: '_views/activities.html',
      controller: 'ActivitiesController'
    }).
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
    when('/activity/:itemID', {
      templateUrl: '_views/activity.html',
      controller: 'ActivityController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //current Auth
      } //resolve
    }).
    otherwise({
      redirectTo: '/activities'
    });
}]);