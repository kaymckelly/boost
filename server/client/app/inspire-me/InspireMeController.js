(function() {
  'use strict';

  angular
    .module('boostApp')
    .controller('InspireMeController', InspireMeController);

    function InspireMeController($http) {
      var vm = this;
      vm.getQuote = getQuote;

      function getQuote() {
        $http.get('/api/quotes').then(function(result){
          vm.quote = result.data.quote;
        })
      }
      getQuote();
    }
})();
