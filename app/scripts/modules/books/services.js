'use strict';

angular
    .module('BooksModule')
        .factory('BooksService', function($http, BooksUrl) {
            var booksService = {};

            // Retrieve all books
            booksService.getAll = function() {
                return $http.get(BooksUrl).then(function(data) {
                    return data.data;
                });
            };

            // Retrieve book that match with bookId
            booksService.getDetail = function(bookId) {
                return $http.get(BooksUrl).then(function(data) {
                    var book = _.findWhere(data.data, {id: bookId});
                    return book;
                });
            };

            // Retrieve last three books
            booksService.getLast = function (quantity) {
                return $http.get(BooksUrl).then(function(data) {
                    var books = data.data.slice(Math.max(data.data.length - quantity, 1)).reverse();
                    return books;
                });
            };

            // Retrieve three related books
            booksService.getRelated = function (category, name, bookId) {
                return $http.get(BooksUrl).then(function(data) {

                    // filter only related books
                    var relatedBooks = _.filter(data.data, function(book){
                        return book.genre.category == category && book.genre.name == name;
                    });

                    // make sure our selected books is not on related ones
                    var cleanRelatedBooks = _.without(relatedBooks, _.findWhere(relatedBooks, {id: bookId}));

                    // get three random related books
                    var randomRelatedBooks = _.sample(cleanRelatedBooks, 3);

                    return randomRelatedBooks;
                });
            };

            return booksService;

        }) // end of .service
; // end of file.
