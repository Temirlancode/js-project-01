'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for(let i=0; i <2; i++) {
        const a = prompt('Один из просмотренный фильмов?', '').trim(),
              b = prompt('Насколько его оцените?', '').trim();
        if(a != null && b != null && a != '' && b != '' && a.length<50) {  //null -отмена
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();


function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        let answer = prompt(`Ваш любимый жанр под номером ${i}`,'');  
        while(answer == null || answer == '' || !isNaN(answer) ) {
            answer = prompt(`Ваш любимый жанр под номером ${i}`,''); 
        }
        personalMovieDB.genres[i-1] = answer;
        
    }
}
 
writeYourGenres();