(function () {

  'use strict';

  var myApp = angular.module('myApp', ['ngRoute', 'mgcrea.ngStrap']);

  myApp.constant('VERSION', "0.1");

  myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {templateUrl:'partials/home.html'})
    .when('/one', {templateUrl:'partials/one.html', controller:'TestOneController'})
    .when('/two', {templateUrl:'partials/two.html', controller:'TestTwoController'})
    .when('/three', {templateUrl:'partials/three.html', controller:'TestThreeController'})
    .when('/four', {templateUrl:'partials/four.html', controller:'TestFourController'});
  });

  myApp.controller('TestOneController', function($scope) {
    $scope.greeting = "Hello, World!";
    $scope.newText = undefined;
    $scope.changeGreeting = function() {
      if ($scope.newText !== undefined) {
        $scope.greeting = $scope.newText;
      }
    };
  });

  myApp.controller('TestTwoController', function($scope) {
    $scope.total = 6;
    $scope.newItem = undefined;
    $scope.items = [1, 2, 3];
    $scope.add = function () {
      $scope.items.push($scope.newItem);
      $scope.total = 0;
      for(var i = 0; i < $scope.items.length; i++){
        $scope.total += parseInt($scope.items[i]);
      }
    };
  });

  myApp.controller('TestThreeController', function($scope) {
    $scope.modal = {title: 'Hi!', content: 'This is a message!'};
  });

  myApp.controller('TestFourController', function($scope, $http) {
    $scope.repos = [];
    $scope.loadRepos = function () {
      $http.get('https://api.github.com/repositories').then(function (repos) {
        $scope.repos = repos.data;
      });
    };
  });

}());
