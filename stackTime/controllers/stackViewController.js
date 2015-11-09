angular.module('stack.view', [])

.controller('stackViewController', function($scope, Shared) {
  
  $scope.maxSize = Shared.maxStackVal;
  $scope.stack = Shared.stack;

  $scope.checkLength = function() {
    if ($scope.stack.length >= $scope.maxSize) {
      return true;
    }
  };

  $scope.pop = function() {
    Shared.stack.shift();
  };
  $scope.push = function() {
    var store = Shared.stack;
    store.unshift($scope.pushVal);
    $scope.stack = Shared.stack;
    $scope.pushVal = "";
  };

  $scope.checkLength();
 
});

