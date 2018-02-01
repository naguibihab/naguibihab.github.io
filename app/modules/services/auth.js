angular.module('myApp.services').service('authService',['$firebaseAuth',
	function($firebaseAuth){
		return $firebaseAuth();
}]);