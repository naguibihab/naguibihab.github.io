'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'modules/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller("aboutCtrl",['$scope','teamService','$rootScope',
	,function($scope,teamService,$rootScope){
	$rootScope.pageTitle = 'Team';
	$scope.team = teamService.team;
}]);