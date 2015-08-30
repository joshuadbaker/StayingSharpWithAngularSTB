angular.module('NoteWrangler').factory('Category', function($resource) {
  return $resource('/categories/:id', {id: '@id'}, {

    // if name === category.name allow update
    // update: {
    //   method: "PUT"
    // }
  });
});