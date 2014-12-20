/*global angular:false */
angular.module('voteful', ['ngMaterial'])
.controller('HomeController', ['$scope', '$http', '$mdDialog', '$mdBottomSheet', function($scope, $http, $mdDialog, $mdBottomSheet){
  $scope.links = [];
  $scope.searchTerm = '';
  
  $scope.search = function (term) {
    console.log(term);
    if(term.length > 2) {
      $http.get('/search.json', {params:{term: term}}).success(success).error(error);
      $('.loading-button').show();
    return;}
    function success(data, status, headers, config){
      console.log('success');
      $('.loading-button').hide();
      $scope.links = data.links;
    }
    function error(data, status, headers, config){
      console.log('error');
      $('.loading-button').hide();
      $scope.error = "Unable to search at this time";
    }
  };  
  $scope.expand = function($event) {
    $(event.target).removeClass('md-whiteframe-z1').addClass('md-whiteframe-z4');
  };
  $scope.shrink = function($event) {
    $(event.target).removeClass('md-whiteframe-z4').addClass('md-whiteframe-z1');
  };
}])
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

