(function () {
  'use strict';

  angular
    .module('app')
    .config(routesConfig)
    .component('about', {
      templateUrl: 'app/containers/About/About.html',
      controller: About,
      controllerAs: 'about'
    });

  routesConfig.$inject = ['$stateProvider'];
  function routesConfig($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        component: 'about'
      });
  }

  function About() {
  }
})();
