angular.module('myApp.filters',[])
.filter('trustfilter', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);