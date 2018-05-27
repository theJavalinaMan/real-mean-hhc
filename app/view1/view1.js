'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', View1Ctrl);

function View1Ctrl($scope) {


    $scope.soundButton = function () {
            $("#vid").prop('muted', !$("#vid").prop('muted'));


        // $scope.slideMaxHeight = document.getElementById('vid').videoHeight;
    };
    $scope.carouselButton = function(){
        $("video").prop('muted', true);
    };
    $scope.playButton = function () {
        $scope.video = document.getElementById('vid');
        if ($scope.video.paused) {
            $scope.video.play();
        }
        else {
            $scope.video.pause();
        }


    }
}