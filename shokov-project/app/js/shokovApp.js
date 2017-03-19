let ngApp = angular.module('shokovApp', ['ngRoute']);

ngApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'app/partials/home.html'
        })
        .when('/home-furnitures', {
            templateUrl : 'app/partials/home-furnitures.html'
        })
        .when('/kitchens', {
            templateUrl : 'app/partials/kitchens.html'
        })
        .when('/wardrobes', {
            templateUrl : 'app/partials/wardrobes.html'
        })
        .when('/bedrooms', {
            templateUrl : 'app/partials/bedrooms.html'
        })
        .when('/living-rooms', {
            templateUrl : 'app/partials/living-rooms.html'
        })
        .when('/entrance', {
            templateUrl : 'app/partials/entrance.html'
        })
        .when('/others', {
            templateUrl : 'app/partials/others.html'
        })
        .when('/office-furnitures', {
            templateUrl : 'app/partials/office-furnitures.html'
        })
        .when('/commercials', {
            templateUrl : 'app/partials/commercials.html'
        })
        .when('/preschool', {
            templateUrl : 'app/partials/preschool.html'
        })
        .when('/materials', {
            templateUrl : 'app/partials/materials.html'
        })
        .when('/mechanisms', {
            templateUrl : 'app/partials/mechanisms.html'
        })
        .when('/for-kitchens', {
            templateUrl : 'app/partials/for-kitchens.html'
        })
        .when('/for-wardrobes', {
            templateUrl : 'app/partials/for-wardrobes.html'
        })
        .when('/hinges', {
            templateUrl : 'app/partials/hinges.html'
        })
        .when('/mattresses', {
            templateUrl : 'app/partials/mattresses.html'
        })
        .when('/appliances', {
            templateUrl : 'app/partials/appliances.html'
        })
        .when('/contacts', {
            templateUrl : 'app/partials/contacts.html'
        })
        .when('/login', {
            templateUrl : 'app/partials/login.html',
            controller : 'loginCtrl'
        })
}]);

ngApp.controller('mainCtrl', ['$scope', function ($scope) {

}]);
ngApp.controller('loginCtrl', ['$scope', function ($scope) {
    $scope.username = '';
    $scope.password = '';
    $scope.incomplete = true;
    $scope.error = false;

    $scope.$watch('username', function () {
        $scope.test();
    });
    $scope.$watch('password', function () {
        $scope.test();
    });

    $scope.test = function () {
        if (($scope.username.length > 3) && ($scope.password.length > 3)) {
            $scope.incomplete = false;
        } else {
            $scope.incomplete = true;
        }
    }
}]);
