'use strict';

angular
    .module('BooksModule')
        .controller('BooksDetailController', function ($state, BooksService, data) {
            var self = this;

            self.book = data.book;
            self.relatedBooks = data.relatedBooks;

            // calculate relative date from published
            self.relativeDate = function(date) {
                return moment(date).from();
            };

        }) // end of .controller
; // end of file
