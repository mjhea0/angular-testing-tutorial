describe('TestOneController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('TestOneController', {
      $scope: $scope
    });
  }));

  it('initially has a greeting', function () {
    assert.equal($scope.greeting, "Hello, World!");
  });

  it('clicking the button changes the changes the greeting if text is inputed', function () {
    $scope.newText = "Hi!";
    $scope.changeGreeting();
    assert.equal($scope.greeting, "Hi!");
  });

  it('clicking the button does not change the greeting if text is not inputed', function () {
    $scope.changeGreeting();
    assert.equal($scope.greeting, "Hello, World!");
  });

});