angular.module('stack.factory', [])

.factory('Shared', function ($http) {

  var maxStackVal = 3;
  var stack = [];

  return {
    maxStackVal : maxStackVal,
    stack : stack
  };

});