/*global angular:false*/
angular.module('voteful')
.controller('AddProjectController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog){
  $scope.sendIdea = function(project, description){
    function success(data) {console.log('success');}
    function error(){console.log('error');}
    $http.post('/projects', {project:{ name:project, description:description}}).success(success).error(error);
    $mdDialog.hide();
  };
  $scope.close = function(){
    $mdDialog.hide();
  };
}]);