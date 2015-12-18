'use strict';

angular
    .module('reedsyApp', [
        'ui.bootstrap',
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngSanitize',
        'angular-loading-bar',
        'ui.router',
        'ngMaterial',
        'angularVideoBg',
        'angularUtils.directives.dirPagination',
        // app modules
        'MainModule',
        'BooksModule'
    ]) // end of .module dependencies injections

    // save a constant with the Books url
    .constant('BooksUrl', 'book.json')

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
        $locationProvider.html5Mode(false);

        $urlRouterProvider
          .otherwise('/');

        // edit href sanitazation whitelist to allow 'skype' and 'tel' links
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|skype|tel):/) ;
    }) // end of .config

    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    }) // end of .run
; // end of file
