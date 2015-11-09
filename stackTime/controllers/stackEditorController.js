angular.module('stack.editor', [])

.controller('stackEditorController', function($scope, Shared) {
  $scope.stackSize = Shared.maxStackVal;

  $scope.updateMax = function() {

    Shared.maxStackVal = $scope.newSize;
    $scope.stackSize = Shared.maxStackVal;
    $scope.newSize = "";
    $scope.checkLength();

  };

  $scope.checkLength = function() {
    //check the length of the stack
    //compare to the maxStackVal
    //if 
    var currentStack = Shared.stack.length;
  
    if (currentStack > Shared.maxStackVal) {
      console.log('stack greater');
      //find the difference
      var diff = currentStack - Shared.maxStackVal;
      console.log('diff', diff);
      //for loop three times to unshift
      for (var i = 0; i < diff; i++) {
        console.log('for loop',Shared.stack);
        Shared.stack.shift();
      }
    }

  };



});

//set the max size for a stack take value from the input and send to the factory