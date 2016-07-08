(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('LoginController', LoginController);

    function LoginController(auth) {
      var vm = this;
      vm.auth = auth;
      vm.userlogin = userlogin;

      function userlogin() {
      }
    }
})();
