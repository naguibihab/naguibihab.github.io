'use strict';

angular.module('myApp.ourservices', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ourservices/service', {
    templateUrl: 'modules/ourservices/single-service.html',
    controller: 'singleServiceCtrl'
  });
}])

.controller('singleServiceCtrl',['$scope','ourservicesService','$location','$sce','$window','$rootScope',
	function($scope,ourservicesService,$location,$sce,$window,$rootScope){
		/*Google analytics*/
		$scope.$on('$viewContentLoaded', function(event) {
		    $window._gaq.push(['_trackPageview', $location.url()]);
		 });
		/*End google analytics*/
		$rootScope.pageTitle = 'Our Services';
		$scope.ourservices = angular.copy(ourservicesService.services);
		$scope.service = '';

		angular.forEach($scope.ourservices,function(value,key){
			if(value.page == $location.hash()){
				$scope.service = value;
				$scope.ourservices.splice(key,1);
			}
		});

}])