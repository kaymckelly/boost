(function() {
  'use strict';

  angular
    .module('boostApp', [
      'ui.bootstrap',
      'ngAnimate',
      'ngTouch',
      'ngRoute',
      'snap'
    ])
    .config(config);

    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/timer', {
          templateUrl: '/app/timer/timer.html',
          controller: 'TimerController',
          controllerAs: 'timer'
        })
        .when('/boost', {
          templateUrl: '/app/boostSomebody/boost.html',
          controller: 'BoostSomebodyController',
          controllerAs: 'boost'
        })
        .when('/login', {
          templateUrl: '/app/login/login.html'
        })
        .otherwise({
          redirectTo: '/'
        })
  };
})();
