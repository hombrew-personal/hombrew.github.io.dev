(function () {
  'use strict';

  angular
    .module('app')
    .config(routesConfig)
    .component('contact', {
      templateUrl: 'app/containers/Contact/Contact.html',
      controller: Contact,
      controllerAs: 'contact'
    });

  routesConfig.$inject = ['$stateProvider'];
  function routesConfig($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        component: 'contact'
      });
  }

  function Contact() {
    var
      contact = this;
  }
})();
