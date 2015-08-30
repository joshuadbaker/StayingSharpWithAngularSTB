angular.module('NoteWrangler').factory('User', function($resource) {
  return $resource('/users/:id', {id: '@id'}, {

    // if name === user.name allow update
    // update: {
    //   method: "PUT"
    // }
  });
});