let app = angular.module('videoApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'app/partials/home.html'
        })
        .when('/list-videos', {
            templateUrl : 'app/partials/list-videos.html',
            controller : 'listVideosCtrl'
        })
        .when('/add-video', {
            templateUrl : 'app/partials/add-video.html',
            controller : 'addVideoCtrl'
        })
}]);

app.controller('videoCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.hideFilters = true;
    $rootScope.categories = [];
    $rootScope.categorySelected = '';
    $rootScope.dates = [];

    $scope.listVideos = function () {
        $scope.hideFilters = false;
    };
    $scope.addVideo = function () {
        $scope.hideFilters = true;
    };
    $scope.home = function () {
        $scope.hideFilters = true;
    }
}]);

app.service('myService', function () {
    this.func = function (url) {
        return url.replace('watch?v=', 'embed/');
    }
});

app.filter('replacer', ['myService', function (myService) {
    return function (url) {
        return myService.func(url);
    };
}]);
app.filter('trusted', ['$sce', function ($sce) {
    return function (url) {
        return $sce.trustAsResourceUrl(url);
    }
}]);
