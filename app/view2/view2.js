'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }]).controller('View2Ctrl', View2Ctrl);

function View2Ctrl($scope, $http) {
    $scope.heading = 'fjoiewajofijeiofeiowfjiwo';

    $scope.data = {};
    $scope.submit = function () {
        console.log('clicked submit');
        $http({
            url: 'http://localhost:8080/english-connect-program-sign-up',
            method: 'POST',
            data: $scope.data
        }).then(function (httpResponse) {
            console.log('response:', httpResponse);
        })
    }
}

