myApp.controller('LogController', 
  function($scope, $location, $authWithPassword) {
  
$scope.authObj.$authWithPassword({
  	email: "my@email.com",
  	password: "mypassword"
}).then(function(authData) {
    $location.path('/log');
}).catch(function(error) {
  $scope.message = error.toString();
});

}); //RegistrationController


