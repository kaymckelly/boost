(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('TimerController', function($scope){
      $scope.view={};
      $scope.view.message = "Muahahaha it's the timer!"
    });
})();
