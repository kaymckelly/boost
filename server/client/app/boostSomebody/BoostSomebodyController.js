(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('BoostSomebodyController', BoostSomebodyController);

    function BoostSomebodyController($http) {
      var vm = this;
      vm.getAsk = getAsk;
      vm.toggleComment = toggleComment;

      function getAsk() {
        $http.get('http://localhost:3000/api/ask').then(function(result){
          vm.ask = result.data.ask;
        })
      }
      getAsk();

      function toggleComment() {
        vm.commentForm = !vm.commentForm;
      }
    }
})();
