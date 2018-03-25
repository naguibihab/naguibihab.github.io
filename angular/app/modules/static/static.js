'use strict';

angular.module('myApp.static', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/privacypolicy', {
    templateUrl: 'modules/static/privacypolicy.html',
    controller: 'staticCtrl'
  });
}])

.controller("staticCtrl",['$scope',
	function($scope){
		
}]);