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
      if(typeof $scope.newItem == 'number') {
        $scope.items.push($scope.newItem);
        $scope.total = 0;
        for(var i = 0; i < $scope.items.length; i++){
          $scope.total += parseInt($scope.items[i]);
        }
      }
    };
  });

  myApp.controller('TestThreeController', function($scope, $modal) {
    $scope.modalNumber = 1;
    var myModal = $modal({scope: $scope, template: 'modal.tpl.html', show: false});
    $scope.showModal = function() {
      myModal.$promise.then(myModal.show);
    };
    $scope.changeModalText = function() {
      $scope.modalNumber++;
      };
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
