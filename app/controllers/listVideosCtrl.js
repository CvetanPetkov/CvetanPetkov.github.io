app.controller('listVideosCtrl', ['$scope', '$rootScope', '$http', '$filter', function ($scope, $rootScope, $http, $filter) {
    $scope.getVideos = function () {
        let hostUrl = 'https://baas.kinvey.com';
        let appKey = 'kid_rkRuoFBsg';
        let collectionName = '/videos';
        let appUrl = hostUrl + '/appdata/' + appKey + collectionName;
        let kinveyAuth = 'Kinvey f83d079c-e3b8-4d9b-9222-c6155018f776.9Rs9/kWq9Z8WIVjcR7grUJCfioZ4jHcqcvHeKic+d5c=';

        $http({
            method: 'GET',
            url: appUrl,
            headers: {
                authorization: kinveyAuth
            }
        })
            .then(function success(response) {
                    $scope.videos = response.data;
                    $rootScope.categories = getCategories(response.data);
                    $rootScope.dates = getDates(response.data);

                    $rootScope.categorySelected = '';
                    $rootScope.byDateSelected = '';
                },
                function error(response) {

                })
    };

    function getCategories(response) {
        let categories = [];
        for (let video of response) {
            if (categories.indexOf(video.category) < 0) {
                categories.push(video.category);
            }
        }
        return categories;
    }

    function getDates(response) {
        let dates = [];
        for (let video of response) {
            if (dates.indexOf($filter('date')(video._kmd.ect)) < 0) {
                dates.push($filter('date')(video._kmd.ect));
            }
        }
        return dates;
    }

    $scope.getVideos();
}]);