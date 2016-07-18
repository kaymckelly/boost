(function() {
  'use strict';

  angular
    .module('boostApp', [
      'ui.bootstrap',
      'ngAnimate',
      'ngTouch',
      'ngRoute',
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
        .when('/home', {
          templateUrl: '/app/home/home.html'
        })
        .otherwise({
          redirectTo: '/'
        })
  };
})();
