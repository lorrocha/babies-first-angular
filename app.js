angular.module('tumblrApp', []).controller('MainCtrl', ['$scope',
  function($scope){
  	$scope.page = 'main.html'

    $scope.test = 'Hello world!!!!';
    
    $scope.blogs = [
    'sailorsunspot',
    'moonlight1130',
    'crunchbuttsteak',
    'docholigay',
    'rocketonthemoon'];
  }
]);


