'use strict';

angular
    .module('MainModule', [])
        .config(function ($stateProvider) {
            $stateProvider
                // master abstract state
                .state('app', {
                    abstract: true,
                    templateUrl:'scripts/modules/main/views/abstract.html',
                })

                // main state
                .state('app.main', {
                    url: '/',
                    templateUrl: 'scripts/modules/main/views/main.html',
                    controller: 'MainController as main',
                    resolve: {
                        books: function(BooksService) {
                            // return last three books
                            return BooksService.getLast(3);
                        }
                    }
                })

                // not found state
                .state('404', {
                    url: '/404',
                    templateUrl:'404.html',
                })

                ;
        }) // end of .config

        .directive('mainHeader', function() {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'templates/mainHeader.html'
            };
        }) // end of .directive

        .directive('mainFooter', function() {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'templates/mainFooter.html'
            };
        }) // end of .directive

        .directive('mainSidebar', function() {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'templates/mainSidebar.html'
            };
        }) // end of .directive
; // end of file
