'use strict';

angular.module('myApp.comingsoon', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/comingsoon', {
    templateUrl: 'modules/comingsoon/comingsoon.html',
    controller: 'comingsoonCtrl'
  });
}])

.controller("comingsoonCtrl",['$scope',
	function($scope){
}]);