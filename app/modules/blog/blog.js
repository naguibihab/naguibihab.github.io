'use strict';

angular.module('myApp.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/blog', {
    templateUrl: 'modules/blog/blog.html',
    controller: 'blogCtrl'
  })
  .when('/blog/article/:slug', {
    templateUrl: 'modules/blog/blog-post.html',
    controller: 'blogPostCtrl'
  });
}])

.controller("blogCtrl",['$scope','$sce','blogService','$rootScope','$window','$location','$document', '$filter',
	function($scope,$sce,blogService,$rootScope,$window,$location,$document,$filter){
		/*Google analytics*/
		$scope.$on('$viewContentLoaded', function(event) {
		    $window._gaq.push(['_trackPageview', $location.url()]);
		    $window._gaq.push(['userId', localStorage.getItem("user_id")]); // Set the user ID using signed-in user_id.
		 });
		/*End google analytics*/
		$rootScope.pageTitle = 'Blog';
		$scope.blogs = blogService.blogs;

		/*Twitter widget height*/
		$scope.pageHeight = $window.innerHeight-100;
		/*setTimeout(function(){ 
			$scope.pageHeight = $window.innerHeight-100;
			// alert($scope.pageHeight)
		}, 0);*/

		/*Pagination*/
		$scope.currentPage = 0;
	    $scope.pageSize = 5;
	    $scope.data = [];
	    $scope.q = '';
	    
	    $scope.getData = function () {
	      // needed for the pagination calc
	      return $filter('filter')($scope.blogs, $scope.q)
	     
	    }
	    
	    $scope.numberOfPages=function(){
	        return Math.ceil($scope.getData().length/$scope.pageSize);                
	    }

	    $scope.changePerPage=function(perpage){
	        $scope.pageSize = perpage;
	    }
	    /*End Pagination*/

}])

.controller("blogPostCtrl",['$scope','$sce','blogService','teamService','$location','$rootScope','$routeParams','$timeout','$window',
	function($scope,$sce,blogService,teamService,$location,$rootScope,$routeParams,$timeout,$window){
		var blogs = blogService.blogs;
		$scope.blog = '';
		/*Google analytics*/
		$scope.$on('$viewContentLoaded', function(event) {
		    $window._gaq.push(['_trackPageview', $location.url()]);
		    $window._gaq.push(['userId', localStorage.getItem("user_id")]); // Set the user ID using signed-in user_id.
		 });
		/*End google analytics*/
		angular.forEach(blogs,function(value,key){
			if(value.page == $routeParams.slug){
				$scope.blog = value;
				$rootScope.pageTitle = value.title;
			}
		});

		/*Import author*/
		$scope.blog.author = teamService.team[$scope.blog.authorid];

		/*Initializing FB comments*/
		  angular.element(document).ready(function() {

		  	window.fbAsyncInit = function () {
		        FB.init({appId: '1680990388872105', version: 2.4, xfbml: true});
		        //alert('test')
		        facebookInit();
		    };

		    (function () {
		        var e = document.createElement('script');
		        e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
		        e.async = true;
		        document.getElementById('fb-root').appendChild(e);
		    }());
	    	    	
	    	function facebookInit() {
		        console.log('Found FB: Loading comments.');
		        FB.XFBML.parse();
		    }
		    $timeout(function () {
		        facebookInit();
		    }, 200);

       });

	
}])

.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});