var app = angular.module('app', ['upload'])

// .config(function($routeProvider){
//   $routeProvider.when('/', {
    
//   });
// })

.controller('app-ctrl', function($scope) {
  $scope.test = 'hello world';
});
