'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренный фильмов?', ''),
      b = prompt('Насколько его оцените?', ''),
      c = prompt('Один из просмотренный фильмов?', ''),
      d = prompt('Насколько его оцените?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


