'use strict';

angular
    .module('BooksModule', [])
        .config(function ($stateProvider) {
            $stateProvider

                // Books List state
                .state('app.booksList', {
                    url: '/books',
                    templateUrl: 'scripts/modules/books/views/list.html',
                    controller: 'BooksListController as list',
                    resolve : {
                        books: function(BooksService) {
                            // return all the books
                            return BooksService.getAll();
                        }
                    }
                })

                // Book Detail state
                .state('app.booksDetail', {
                    url: '/books/:bookId',
                    templateUrl: 'scripts/modules/books/views/detail.html',
                    controller: 'BooksDetailController as detail',
                    resolve : {
                        data: function(BooksService, $stateParams) {
                            // return a data object with the selected book and three other related books
                            var data = {};
                            return BooksService.getDetail($stateParams.bookId).then(function(book) {
                                data.book = book;
                                return BooksService.getRelated(book.genre.category, book.genre.name, book.id).then(function(relatedBooks) {
                                    data.relatedBooks = relatedBooks;
                                    return data;
                                });
                            });
                        }
                    }
                })
                ;
        }) // end of .config
; // end of file
