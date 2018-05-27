'use strict';

// Declare app level module which depends on views, and components
const myApp = angular.module('myApp', ['ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'ngMaterial',
    'ngMessages']);

myApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

myApp.controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {
    $scope.imagePath = '../assets/img/romania-classrooms-praying-teaching-learning-1407576-wallpaper.jpg';
    $scope.test = 'testing';

}
