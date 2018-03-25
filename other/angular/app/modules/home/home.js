'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'modules/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller("homeCtrl",['$scope','$sce','portfolioService','ourservicesService','$rootScope','$window','$location',
	function($scope,$sce,portfolioService,ourservicesService,$rootScope,$window,$location){
		/*Google analytics*/
		$scope.$on('$viewContentLoaded', function(event) {
		    $window._gaq.push(['_trackPageview', $location.url()]);
		    $window._gaq.push(['userId', localStorage.getItem("user_id")]); // Set the user ID using signed-in user_id.
		 });
		/*End google analytics*/
		$rootScope.pageTitle = 'Home';
		$scope.portfolio = portfolioService.portfolio;
		
		$scope.ourservices = {
			firstrow: [
				ourservicesService.services[0],
				ourservicesService.services[1],
			],
			secondrow: [
				ourservicesService.services[2],
			]
		}

		$scope.displayAllTestimonials = function(){
			$('.testimonial-row').show();
			$('#testimonial-seeall-button').hide();
		}
		
		// Bash animation
		$(function(){
			$('#bash').css('display','block');
			$("#bashTyped").typed({
				strings: ['So you have an idea for an APP^2000 for yourself^500, your business^500 or for others.','Awesome!','You\'ve come to the right place^500','We do...^1000 wicked apps!^4000'],
				typeSpeed: 5,
				loop: true,
				showCursor: true,
				cursorChar: "_"
			});
		});
}]);