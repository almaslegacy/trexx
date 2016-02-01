myApp.controller('DashboardController',
  ['$scope', 'Mytotals',
  function($scope, Mytotals) {
  
  $scope.login = function() {
    Authentication.login($scope.user);
  }; //login

  $scope.logout = function() {
    Authentication.logout();
  }; //logout

  $scope.register = function() {
    Authentication.register($scope.user);
  }; // register

}]); // Controller