/*global angular:false*/
angular.module('voteful')
.controller('ProjectController', ['$routeParams','$scope', '$http', '$mdToast', '$mdDialog', function($routeParams, $scope, $http, $mdToast, $mdDialog){ 

  $scope.getProject = function() {
    function success(data) {
      console.log('success');
      $scope.project = data;
    }
    function error(data){console.log('error');}
    $http.get('/projects/' + $routeParams.id ).success(success).error(error);
  }; 
  $scope.getProject();
  
  $scope.addComment = function($event){
    $mdDialog.show({
      targetEvent: $event,
      templateUrl: 'new-comment.html',
      controller: 'AddCommentController'
    });
  };
}]);