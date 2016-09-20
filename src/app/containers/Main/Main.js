(function () {
  'use strict';

  angular
    .module('app')
    .component('mainContainer', {
      templateUrl: 'app/containers/Main/Main.html',
      controller: Main,
      controllerAs: 'main',
      bindings: {
        padre: '='
      }
    });

  function Main() {
    var
      main = this;

    main.links = [
      'home',
      'about',
      'skills',
      'portfolio',
      'contact'
    ];
    console.log(main.padre);
  }
})();
