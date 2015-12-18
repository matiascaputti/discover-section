'use strict';

angular
    .module('BooksModule')
        .controller('BooksListController', function ($state, BooksService, books) {
            var self = this;

            self.books = books;

            // get all genres objects
            var genres = _.map(self.books, _.iteratee('genre'));

            // get only unique genre categories
            var allCategories = _.map(genres, _.iteratee('category'));
            self.uniqueCategories = _.unique(allCategories);

            // get only unique genre names
            var allGenres = _.map(genres, _.iteratee('name'));
            self.uniqueGenres = _.unique(allGenres);

            // calculate relative date from published
            self.relativeDate = function(date) {
                return moment(date).from();
            };

            // refresh function to clean all filters
            self.refresh = function() {
                self.selectedCategory = undefined;
                self.selectedGenre = undefined;
                self.searchBookName = undefined;
                self.searchBookAuthor = undefined;
            };

        }) // end of .controller
; // end of file
