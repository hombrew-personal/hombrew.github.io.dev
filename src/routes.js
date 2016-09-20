(function () {
  'use strict';

  angular
    .module('app')
    .config(routesConfig);

  /** @ngInject */
  routesConfig.$inject = [
    '$urlRouterProvider',
    '$locationProvider'
  ];
  function routesConfig($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/home');
  }
})();
