(function () {
  'use strict';

  angular
    .module('app')
    .config(routesConfig)
    .component('skills', {
      templateUrl: 'app/containers/Skills/Skills.html',
      controller: Skills,
      controllerAs: 'skills'
    });

  routesConfig.$inject = ['$stateProvider'];
  function routesConfig($stateProvider) {
    $stateProvider
      .state('skills', {
        url: '/skills',
        component: 'skills'
      });
  }

  function Skills() {
    var
      skills = this;
  }
})();
