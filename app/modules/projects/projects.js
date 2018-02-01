'use strict';

angular.module('myApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'modules/projects/projects.html',
    controller: 'projectsCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects/preview/:id', {
  // $routeProvider.when('/projects#project', { // Tried this and it didn't work as well
    templateUrl: 'modules/projects/single-project.html',
    controller: 'singleProjectCtrl'
  });
}])


.controller('projectsCtrl',['$scope','portfolioService','$rootScope','$window','$location',
	function($scope,portfolioService,$rootScope,$window,$location){
		/*Google analytics*/
		$scope.$on('$viewContentLoaded', function(event) {
		    $window._gaq.push(['_trackPageview', $location.url()]);
		    $window._gaq.push(['userId', localStorage.getItem("user_id")]); // Set the user ID using signed-in user_id.
		 });
		/*End google analytics*/
		$rootScope.pageTitle = 'Portfolio & Selected Work - An Idea For An App';
		$scope.portfolio = portfolioService.portfolio;
}])

.controller('singleProjectCtrl',['$scope','portfolioService','$location','$sce','$http','$rootScope','$routeParams','$window',
	function($scope,portfolioService,$location,$sce,$http,$rootScope,$routeParams,$window){
		/*Google analytics*/
		$scope.$on('$viewContentLoaded', function(event) {
		    $window._gaq.push(['_trackPageview', $location.url()]);
		 });
		/*End google analytics*/
		var portfolio = portfolioService.portfolio;
		$scope.proj = '';

		angular.forEach(portfolio,function(value,key){
			if(value.page == $routeParams.id){
				$scope.proj = value;
			}
		});

		$rootScope.pageTitle = $scope.proj.title + ' - ' + $scope.proj.info;

		$scope.contactAlert = [];

		$scope.contactName = '';
		$scope.contactEmail = '';
		$scope.contactNumber = '';
		$scope.contactMessage = '';

		$scope.submitContactForm = function(){

			$scope.contactButton = 'Sending...';
			var params = {
				to_email: 'nick@anideaforanapp.com',
				subject: 'contact from anideaforanapp.com - project walkthrough - '+$scope.proj.title,
				api_key: 'djdueh2836ehedhywdg',
				message: '<b> Name: </b>'+$scope.contactName+'<br>'+
						'<b> Email: </b>'+$scope.contactEmail+'<br>'+
						'<b> Number: </b>'+$scope.contactNumber+'<br>'+
						'<b> Message: </b>'+$scope.contactMessage+'<br>'
			}

			$http.post('http://api.anideaforanapp.com/email/send',params).then(
				function(response) {
					$scope.contactAlert.class = 'alert-success';
					$scope.contactAlert.message = "<strong>Success</strong> your message has been sent to us";
					$scope.contactAlert.message = $sce.trustAsHtml($scope.contactAlert.message);
					$scope.contactButton = 'Send message';
					console.log("success",response);
				}, function(response){
					$scope.contactAlert.class = 'alert-danger';
					$scope.contactAlert.message = "<strong>Error!</strong> there was an error sending your message, please contact me on <a href='mailto:nick@anideaforanapp.com'>nick@anideaforanapp.com</a>";
					$scope.contactAlert.message = $sce.trustAsHtml($scope.contactAlert.message);
					$scope.contactButton = 'Send message';
					console.log("failed",response);
				});
		}

}])