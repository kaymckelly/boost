(function() {
  'use strict';

  angular
    .module('boostApp', [
      'ui.bootstrap',
      'ngAnimate',
      'ngTouch',
      'ngRoute'
    ])
    .config(config);

    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/timer', {
          templateUrl: '/timer.html',
          controller: 'TimerController'
        })
        .otherwise({
          redirectTo: '/'
        })
    $locationProvider.html5Mode(true);
  };
})();
