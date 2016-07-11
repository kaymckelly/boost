(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('LoginController', LoginController);

    function LoginController() {
      var vm = this;
      vm.userlogin = userlogin;

      function userlogin() {
      }
    }
})();
