(function () {
  'use strict';

  angular
    .module('app')
    .config(routesConfig)
    .component('portfolio', {
      templateUrl: 'app/containers/Portfolio/Portfolio.html',
      controller: Portfolio,
      controllerAs: 'portfolio'
    });

  routesConfig.$inject = ['$stateProvider'];
  function routesConfig($stateProvider) {
    $stateProvider
      .state('portfolio', {
        url: '/portfolio',
        component: 'portfolio'
      });
  }

  function Portfolio() {
  }
})();
