'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'modules/contact/contact.html',
    controller: 'contactCtrl'
  });
}])

.controller("contactCtrl",['$scope','$http','$sce','$rootScope','$window','$location',function($scope,$http,$sce,$rootScope,$window,$location){
	$rootScope.pageTitle = 'Contact Us';
	/*Google analytics*/
		$scope.$on('$viewContentLoaded', function(event) {
		    $window._gaq.push(['_trackPageview', $location.url()]);
		    $window._gaq.push(['userId', localStorage.getItem("user_id")]); // Set the user ID using signed-in user_id.
		 });
		/*End google analytics*/
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

	$scope.contactButton = 'Send message';

	$scope.contactName = '';
	$scope.contactEmail = '';
	$scope.contactNumber = '';
	$scope.contactMessage = '';

	$scope.submitContactForm = function(){

		$scope.contactButton = 'Sending...';

		var params = {
			to_email: 'nick@anideaforanapp.com',
			subject: 'contact from anideaforanapp.com',
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

	

}]);