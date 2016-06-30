(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('TimerController', TimerController);

    function TimerController($timeout) {
      var vm = this;
      vm.counter = 90;
      var myTimeout = null;

      vm.startTimer = function() {
        // $timeout accepts a function and the number of milliseconds until it should execute that function
        myTimeout = $timeout(vm.onTimeout, 1000);
      };

      vm.onTimeout = function() {
        if(vm.counter === 0) {
          $timeout.cancel(myTimeout);
          alert('A chime will sound!');
        } else {
          vm.counter--;
          myTimeout = $timeout(vm.onTimeout, 1000);
        }
      };

      vm.stopTimer = function() {
        vm.counter = 90;
        $timeout.cancel(myTimeout);
      };
    }
})();
