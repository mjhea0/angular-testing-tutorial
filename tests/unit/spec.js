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

describe('TestTwoController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('TestTwoController', {
      $scope: $scope
    });
  }));

  it('initially has a total', function () {
    assert.equal($scope.total, 6);
  });

  it('initially has items', function () {
    assert.isArray($scope.items);
    assert.deepEqual($scope.items, [1, 2, 3]);
  });

  it('updates the `total` and `items` array when a value is added', function () {
    $scope.newItem = 7;
    $scope.add();
    assert.equal($scope.total, 13);
    assert.deepEqual($scope.items, [1, 2, 3, 7]);
  });

  it('does not update the `total` and `items` array when an empty value is added', function () {
    $scope.newItem = undefined;
    $scope.add();
    assert.equal($scope.total, 6);
    assert.deepEqual($scope.items, [1, 2, 3]);
    $scope.newItem = 22;
    $scope.add();
    assert.equal($scope.total, 28);
    assert.deepEqual($scope.items, [1, 2, 3, 22]);
  });

});

describe('TestThreeController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('TestThreeController', {
      $scope: $scope
    });
  }));

  it('initially has a modalNumber', function () {
    assert.equal($scope.modalNumber, 1);
  });

  it('updates the `modalNumber` when a value is added', function () {
    $scope.changeModalText();
    assert.equal($scope.modalNumber, 2);
    $scope.changeModalText();
    assert.equal($scope.modalNumber, 3);
  });

});

describe('TestFourController', function () {

  var controller = null;
  var $scope = null;
  var $httpBackend = null;
  var mockedDashboardJSON = null;

  beforeEach(function () {
    module('myApp', 'mockedDashboardJSON');
  });

  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, defaultJSON) {
    $httpBackend = _$httpBackend_;
    $scope = $rootScope.$new();
    $httpBackend.when('GET','https://api.github.com/repositories').respond(defaultJSON.fakeData);
    controller = $controller('TestFourController', {
        $scope: $scope
    });
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('initially has repos', function () {
    assert.isArray($scope.repos);
    assert.deepEqual($scope.repos, []);
  });

  it('clicking the button updates the repos', function () {
      $scope.loadRepos();
      $httpBackend.flush();
      assert.equal($scope.repos.length, 100);
  });

});

describe('routes', function(){

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function (_$httpBackend_, _$route_, _$location_, $rootScope) {
    $httpBackend = _$httpBackend_;
    $route = _$route_;
    $location = _$location_;
    $scope = $rootScope.$new();
  }));

  it('should load the one.html template', function(){
    $httpBackend.whenGET('partials/one.html').respond('...');
    $scope.$apply(function() {
      $location.path('/one');
    });
    assert.equal($route.current.templateUrl, 'partials/one.html');
    assert.equal($route.current.controller, 'TestOneController');
  });

});