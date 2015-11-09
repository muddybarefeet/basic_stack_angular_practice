/*allows all module to inject things to another module*/
angular.module('stack', [
  'stack.factory',
  'stack.view',
  'stack.editor',
  'ngRoute'
  //que???
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/editor', {
      templateUrl: 'views/stackEditor.html',
      controller: 'stackEditorController'
    })
    .when('/view', {
      templateUrl: 'views/stackView.html',
      controller: 'stackViewController'
    })
    .otherwise({
      redirectTo: '/view'
    });

});