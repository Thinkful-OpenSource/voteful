/*global angular:false*/
angular.module('voteful')
.controller('HomeController', ['$scope', '$http', '$mdDialog', function($scope, $http, $mdDialog){
  $scope.projects = [];
  
  $scope.getProjects = function() {
    function success(data) {
      console.log('success');
      $scope.projects = data;
    
    }
    function error(data){console.log('error');}
    $http.get('/projects').success(success).error(error);
  }; 
  
  $scope.getProjects();
  
  $scope.getVotes = function (project) {
    return project.upvotes - project.downvotes;
  }
  
  $scope.up = function(project)
  {
    function success(data){
      $scope.project = data;
      console.log(project.upvotes);
      return $scope.project;
    }
    function error(){console.log('error');}
    $http.put('/projects/up/'+ project.id).success(success).error(error);
  };
  
  $scope.newIdea = function ($event){
    $mdDialog.show({
      targetEvent: $event,
      templateUrl: 'new-idea.html',
      controller: 'AddProjectController'
    });
  };
  
  $scope.down = function(project)
  {
    function success(data){ $scope.project = data;}
    function error(){console.log('error');}
    $http.put('/projects/down/'+project.id).success(success).error(error);
  };
  
}]);