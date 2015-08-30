angular.module('NoteWrangler').controller('UserShowController', function(User, $scope, $routeParams, $location) {
  $scope.user = User.get({id: $routeParams.id});
  // console.log($scope.note);

  // delete user functionality for admin use ONLY
  // $scope.deleteUser = function(user) {
  //   user.$remove().then(function() {
  //     $location.path('/users');
  //   });
  // };
});

// 1:09:51