(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('IndexController', function($scope) {
      $scope.view = {};
      $scope.view.message = "What up world"
    });
})();
