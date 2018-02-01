'use strict';

angular.module('myApp.webinar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upcoming-webinar', {
    templateUrl: 'modules/webinar/webinar.html',
    controller: 'webinarCtrl'
  });
}])

.controller("webinarCtrl",['$scope','$http','$sce','$rootScope','$firebaseAuth','$firebaseObject','localStorageService','$q','$window','$location','$interval',
	function($scope,$http,$sce,$rootScope,$firebaseAuth,$firebaseObject,localStorageService,$q,$window,$location,$interval){
		$rootScope.pageTitle = 'Upcoming Webinars';
		/*Google analytics*/
		$scope.$on('$viewContentLoaded', function(event) {
		    $window._gaq.push(['_trackPageview', $location.url()]);
		    $window._gaq.push(['userId', localStorage.getItem("user_id")]); // Set the user ID using signed-in user_id.
		 });
		$scope.showWebinar = false;
		/*End google analytics*/
		/*Firebase setup upcoming webinars*/
		var ref = firebase.database().ref();
		var webinarRef = ref.child("upcoming_webinars");
		$rootScope.showTopTimer = false;

	// Bash animation
	$(function(){
		$("#contactTyped").typed({
			strings: ['you don\'t have to sell your kidney to make an app?^2000','most people are surprised to find out how cheap it is to make their idea a reality?^2000','you can get in touch and know roughly how much it would cost to make your app?^2000'],
			typeSpeed: 5,
			loop: true,
			showCursor: true,
			cursorChar: "_"
		});
	});

	$scope.contactAlert = [];

	$scope.contactButton = 'Sign Up!';

	$scope.contactName = '';
	$scope.contactEmail = '';
	$scope.contactNumber = '';
	$scope.contactMessage = '';

	
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