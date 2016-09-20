(function () {
  'use strict';

  angular
    .module('app')
    .config(routesConfig)
    .component('home', {
      templateUrl: 'app/containers/Home/Home.html',
      controller: Home,
      controllerAs: 'home'
    });

  routesConfig.$inject = ['$stateProvider'];
  function routesConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        component: 'home'
      });
  }

  function Home() {
    var
      home = this;
    home.variable = 'home';
  }
})();
