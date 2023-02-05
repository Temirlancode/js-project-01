'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB[count] = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB[count] == '' || isNaN(personalMovieDB[count]) || personalMovieDB[count] == null) {
            personalMovieDB[count] = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из просмотренный фильмов?', '').trim(),
                b = prompt('Насколько его оцените?', '').trim();
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {  //null -отмена
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDb: function () {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            //let answer = prompt(`Ваш любимый жанр под номером ${i}`,'');  
            //while(answer == null || answer == '' || !isNaN(answer) ) {
            //    answer = prompt(`Ваш любимый жанр под номером ${i}`,''); 
            //}
            //personalMovieDB.genres[i-1] = answer;
            let answer = prompt(`Введите любимые жанры через запятую`, '').toLowerCase();
            if (answer == null || answer == '' || !isNaN(answer)) {
                console.log('Error');
                i--;
            }
            personalMovieDB.genres = answer.split(', ');
            personalMovieDB.genres.sort();
        }
        personalMovieDB.genres.forEach(function (value, i) {
            console.log(`Любимый жанр ${i + 1} - это ${value}\n`);
        })
    }
};

