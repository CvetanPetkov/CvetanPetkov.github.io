app.controller('addVideoCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.uploadVideo = function () {
        let hostUrl = 'https://baas.kinvey.com';
        let appKey = 'kid_rkRuoFBsg';
        let collectionName = '/videos';
        let appUrl = hostUrl + '/appdata/' + appKey + collectionName;
        let kinveyAuth = 'Kinvey 02397300-45bd-4172-a97c-4a7fd9df261f.qg95MzdoQiM44KoxFMxknyIIeaI4Xr/pV3PxggYrj4M=';
        let videoData = {
            title : $scope.title,
            url : $scope.url,
            category : $scope.category,
            subtitles : $scope.subtitles
        };

        $http({
            method : 'POST',
            url : appUrl,
            data : videoData,
            headers : {
                authorization : kinveyAuth,
                contentType : 'application/json'
            }
        })
            .then(function success() {
                $scope.title = '';
                $scope.url = '';
                $scope.category = '';
                $scope.subtitles = '';
            },
            function error(response) {

            })
    };
}]);