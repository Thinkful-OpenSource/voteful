/*global angular:false*/
angular.module('voteful')
.controller('AddCommentController', ['$scope', '$routeParams', '$http', '$mdToast', '$mdDialog', function($scope, $routeParams, $http, $mdToast, $mdDialog){
  $scope.sendComment = function(comment){
    console.log(comment)
    function success(data) {console.log('success');}
    function error(){console.log('error');}
    $http.post('/comments', {comment:{project_id: $routeParams.id, text: comment}}).success(success).error(error);
    $mdDialog.hide();
  };
  $scope.close = function(){
    $mdDialog.hide();
  };
}]);