angular.module('myModule', [])
    .directive('myDirective', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.height = element.prop('offsetHeight');
            scope.width = element.prop('offsetWidth');
        }
    };
  });