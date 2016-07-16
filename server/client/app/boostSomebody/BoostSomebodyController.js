(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('BoostSomebodyController', BoostSomebodyController);

    function BoostSomebodyController($http) {
      var vm = this;
      vm.getAsk = getAsk;
      vm.toggleComment = toggleComment;
      vm.newComment = newComment;
      vm.commentText = '';

      function getAsk() {
        $http.get('/api/ask').then(function(result){
          vm.ask = result.data.ask;
          vm.ask_id = result.data.id;
        })
      }
      getAsk();

      function toggleComment() {
        vm.commentForm = !vm.commentForm;
      }

      function newComment() {
        // $http({
        //   method: 'post',
        //   url: 'http://localhost:3000/api/comments',
        //   data: { ask_id: vm.ask.id, comment: vm.commentText }
        // })
        $http.post('/api/comments', { ask_id: vm.ask_id, comment: vm.commentText })
        .then(function(result){
          vm.comment = result.data.comment;
        })
      }
    }
})();
