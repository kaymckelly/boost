(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('CommentController', CommentController);

    CommentController.$inject = ['$http'];

    function CommentController($http) {
      var vm = this;
      vm.lonelyChicken = '';
      vm.newComment = newComment;

      function newComment() {
        $http({
          method: 'post',
          url: 'http://localhost:3000/api/comments',
          data: JSON.stringify({comment: vm.lonelyChicken})
        })
        .then(function(result){
          vm.comment = result.data.comment;
        })
      }
    }
})();
