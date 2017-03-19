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

ngApp.controller('mainCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.getUserName = function () {
        return sessionStorage.getItem('username');
    }
}]);
ngApp.controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {
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
    };

    $scope.login = function () {
        let hostUrl = 'https://baas.kinvey.com';
        let appKey = 'kid_rkRuoFBsg';
        let appSecret = '5b3ece9325744393887ce2e65ed91514';
        let loginUrl = hostUrl + '/user/' + appKey + '/login';
        let basicAuth = 'Basic ' + btoa(appKey + ':' + appSecret);
        let userData = {
            username: $scope.username,
            password: $scope.password
        };

        $http({
            method : 'POST',
            url : loginUrl,
            data : userData,
            headers : {
                authorization : basicAuth,
                contentType : 'application/json'
            }
        })
            .then(function success(response) {
                    $scope.username = '';
                    $scope.password = '';
                    let authToken = response.data._kmd.authtoken;
                    $scope.sessionName = response.data.username;
                    sessionStorage.setItem('username', $scope.sessionName);
                    sessionStorage.setItem('authToken', authToken);
                },
                function error(response) {
                    $scope.error = true;
                    $scope.username = '';
                    $scope.password = '';
                })
    }
}]);
