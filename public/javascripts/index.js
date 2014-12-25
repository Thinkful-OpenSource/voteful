/*global angular:false */
angular.module('voteful', ['ngMaterial'])
.controller('HomeController', ['$scope', '$http', '$mdDialog', '$mdBottomSheet', function($scope, $http, $mdDialog, $mdBottomSheet){
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
  
  $scope.up = function(project){
    project.upvotes++;
    console.log(project);
    function success(data) {console.log('success');}
    function error(){console.log('error');}
    $http.put('/projects/'+ project.id, {project: project}).success(success).error(error);
  };
  $scope.newIdea = function ($event){
    $mdDialog.show({
      targetEvent: $event,
      templateUrl: 'new-idea.html',
      controller: 'AddProjectController'
    });
  };
  
  $scope.down = function(project){
    project.downvotes++;
    function success(data) {console.log('success');}
    function error(){console.log('error');}
    $http.put('/projects/'+project.id, {project: project}).success(success).error(error);
  };
  $scope.open = function(project){
  //$mdDialog.show();
  };
  $scope.showComments = function($event){
  $mdDialog.show({
     targetEvent: $event,
     templateUrl: 'comments.html'
   });
  };
  
}])

.controller('AddProjectController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog, $mdBottomSheet){
  $scope.sendIdea = function(project, description){
    function success(data) {console.log('success');}
    function error(){console.log('error');}
    $http.post('/projects', {name:project, description:description}).success(success).error(error);
    $mdDialog.hide();
  };
  $scope.close = function(){
    $mdDialog.hide();
  };
}]);
  // $scope.report = function(type, message, user){
  //   function success(data){
  //     $mdToast.show($mdToast.simple().content('Thank you for your feedback!').capsule(true));
  //     $mdDialog.hide();
  //   }
  //   function error(){}
  //   $http({
  //     method: 'POST',
  //     url: '/bug',
  //     data: {bug: {type: type, message:message, user:user}},
  //     headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')}  
  //   }).success(success).error(error);
  // };
