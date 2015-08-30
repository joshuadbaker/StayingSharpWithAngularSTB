angular.module('NoteWrangler').directive('title', function($timeout) {
  return function(scope, element, attrs) {
    // code to prevent default tooltip from showing up
    // element.on('mouse-hover', function(event) {
    //   event.preventDefault();
    // });
    
    $timeout(function() {
      // use jQuery syntax to method can be identified as jQuery
      $(element).tooltip();
    });

    // use destroy to prevent memory leaks in the DOM
    scope.$on('$destroy', function() {
      $(element).tooltip('destroy');
    });
  };
});