(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('NavController', NavController);

    function NavController() {
      var vm = this;
      vm.isCollapsed = false;
    }
})();
