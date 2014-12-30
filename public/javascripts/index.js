/*global angular:false */
angular.module('voteful', ['ngMaterial', 'ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl:'templates/index.html', 
      controller: 'HomeController'
    })
    .when('/project/:id', {
      templateUrl: 'templates/project.html',
      controller:'ProjectController'
    })
    .otherwise("/")
}]);