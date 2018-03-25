'use strict';

angular.module('myApp.landingPages', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/get-started-free-consultation', {
    templateUrl: 'modules/landingpages/free-consultation.html',
    controller: 'landing1Ctrl'
  })
  .when('/thebrew', {
    templateUrl: 'modules/landingpages/free-consultation.html',
    controller: 'landing1Ctrl'
  })
  .when('/get-started-free-consultation-sm', {
    templateUrl: 'modules/landingpages/free-consultation.html',
    controller: 'landing1Ctrl'
  })
}])


.controller("landing1Ctrl",['$scope','teamService','$rootScope','$window','$location','$firebaseAuth','$firebaseObject','$http','$sce','blogService',
	function($scope,teamService,$rootScope,$window,$location,$firebaseAuth,$firebaseObject,$http,$sce,blogService){
	/*Google analytics*/
	$scope.$on('$viewContentLoaded', function(event) {
	    $window._gaq.push(['_trackPageview', $location.url()]);
	    $window._gaq.push(['userId', localStorage.getItem("user_id")]); // Set the user ID using signed-in user_id.
	 });
	/*End google analytics*/
	$rootScope.pageTitle = 'Free Consultancy - An Idea for An App';
	$scope.contactAlert = [];

	$scope.contactName = '';
	$scope.contactEmail = '';
	$scope.contactNumber = '';
	$scope.contactMessage = '';

	/*Load blogs*/
	$scope.blogs = blogService.blogs;

	/*Firebase setup upcoming webinars*/
	var ref = firebase.database().ref();
	var freeAdvice = ref.child("free_advice");
	var webinarRef = ref.child("upcoming_webinars");

	$scope.contactButton = 'Sign Up!';


	
	$scope.submitContactForm = function(){
		var newData = {
			'name':$scope.contactName,
			'email':$scope.contactEmail
		};
		webinarRef.push({
				'name':$scope.contactName,
				'email':$scope.contactEmail,
				'created_at':Date.now()
		});
		

		$scope.contactButton = 'Sending...';
		var params = {
			to_email: 'nick@anideaforanapp.com',
			subject: 'contact from anideaforanapp.com - upcoming webinar - from '+$scope.contactName,
			api_key: 'djdueh2836ehedhywdg',
			message: '<b> Name: </b>'+$scope.contactName+'<br>'+
					'<b> Email: </b>'+$scope.contactEmail+'<br>'
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

.controller("landing2Ctrl",['$scope','teamService','$rootScope','$window','$location',
	function($scope,teamService,$rootScope,$window,$location){
	/*Google analytics*/
	$scope.$on('$viewContentLoaded', function(event) {
	    $window._gaq.push(['_trackPageview', $location.url()]);
	 });
	/*End google analytics*/
	$rootScope.pageTitle = 'Landing page 1';
}])

.controller("landing3Ctrl",['$scope','teamService','$rootScope','$window','$location',
	function($scope,teamService,$rootScope,$window,$location){
	/*Google analytics*/
	$scope.$on('$viewContentLoaded', function(event) {
	    $window._gaq.push(['_trackPageview', $location.url()]);
	 });
	/*End google analytics*/
	$rootScope.pageTitle = 'Landing page 1';
}]);