(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('CommentController', CommentController);

    function CommentController($http) {
      var vm = this;
      function newComment() {
        $http.post('http://localhost:3000/api/comments')
        .then(function(result){
          vm.ask = result.data.ask;
        })
      }
    getAsk();
    }
})();
