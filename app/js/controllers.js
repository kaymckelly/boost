(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('IndexController', IndexController);

    function IndexController() {
      var vm = this;
      vm.message = "What up world"
    }
})();
