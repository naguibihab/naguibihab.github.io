'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'firebase',
  '720kb.socialshare',
  /*'ngtweet',*/
  'LocalStorageModule',
  'myApp.filters',
  'myApp.services',
  // 'myApp.comingsoon',
  'myApp.home',
  // 'myApp.about',
  'myApp.projects',
  'myApp.landingPages',
  'myApp.contact',
  'myApp.blog',
  'myApp.webinar',
  'myApp.ourservices',
  'myApp.static',
  'sn.addthis',
  'mailchimp'
])
.config(['$locationProvider', '$routeProvider', 'localStorageServiceProvider', function($locationProvider, $routeProvider, localStorageServiceProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});


  localStorageServiceProvider
    .setPrefix('anidea')
    .setStorageType('sessionStorage');

  var config = {
    apiKey: "AIzaSyCMuNpExHcirlvoVsigsxDh1g3hWmCD0vQ",
    authDomain: "anideaforanapp-1488591057224.firebaseapp.com",
    databaseURL: "https://anideaforanapp-1488591057224.firebaseio.com",
    projectId: "anideaforanapp-1488591057224",
    storageBucket: "anideaforanapp-1488591057224.appspot.com",
    messagingSenderId: "643910309638"
  };
  firebase.initializeApp(config);
}])
.controller('mainCtrl',['$scope','$rootScope','$location','localStorageService','authService','$interval', function($scope,$rootScope,$location,localStorageService,authService,$interval){

  // Run on load
    if(!localStorageService.isSupported) {
      console.warn('LocalStorage is not supported');  
    }

    // Watchers

    $scope.auth = authService;
    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
        // console.info('firebaseUser',$scope.firebaseUser);
      });

/*Timer*/
  $rootScope.CountDown = {
      getTimeRemaining: function(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      },

      initializeClock: function(endtime) {
        function updateClock() {
          var t = $rootScope.CountDown.getTimeRemaining(endtime);

          $rootScope.CountDown.days = t.days;
          $rootScope.CountDown.hours = ('0' + t.hours).slice(-2);
          $rootScope.CountDown.minutes = ('0' + t.minutes).slice(-2);
          $rootScope.CountDown.seconds = ('0' + t.seconds).slice(-2);

          if (t.total <= 0) {
            $interval.cancel(timeinterval);
          }
        }

        updateClock();
        var timeinterval = $interval(updateClock, 1000);
      }
  }

/*End Timer*/
  
  var dataLayer = window.dataLayer = window.dataLayer || [];
  $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
    window.scrollTo(0, 0);

    /*Google tag manager*/
    dataLayer.push({
        event: 'ngRouteChange',
        attributes: {
          route: $location.path()
        }
      });
    /*End Google tag manager*/
    
    var now = Date.now();
    var webinar_date = Math.round(new Date("Wed, 14 Jun 2017 09:00:00 GMT").getTime());
    
    if(now < webinar_date){
      $rootScope.showTopTimer = true;
      $rootScope.showTimer = true;
      $scope.CountDown.initializeClock("Wed, 14 Jun 2017 09:00:00 GMT");
    }
    else{
      $rootScope.showTopTimer = false;
      $rootScope.showTimer = false;
    }

    /*GA user identify*/
    if(localStorage.getItem("user_id") == null){
      var random_str = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 30; i++)
        random_str += possible.charAt(Math.floor(Math.random() * possible.length));
      localStorage.setItem("user_id", random_str);
      // alert(random_str);
      $rootScope.user_id = localStorage.getItem("user_id");
    }
  });

	$scope.bashShown = function() {
		return $location.path().endsWith('/home');
	}

  $scope.showHeaderAndFooter = function() {
    return !$location.path().endsWith('/comingsoon');
  }
}]);