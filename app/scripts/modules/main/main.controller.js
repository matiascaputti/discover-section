'use strict';

angular
    .module('MainModule')
        .controller('MainController', function ($state, books) {
            var self = this;

            self.books = books;

            self.videoId = 'ToVcPM7EjoA';

            self.relativeDate = function(date) {
                return moment(date).from();
            };

        }) // end of .controller
; // end of file
