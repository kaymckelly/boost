(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('TimerController', TimerController);

    function TimerController() {
      var vm = this;
      vm.message = "Muahahaha it's the timer!"
    }
})();
