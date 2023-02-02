'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//for(let i=0; i <2; i++) {
//    const a = prompt('Один из просмотренный фильмов?', ''),
//          b = prompt('Насколько его оцените?', '');
//    if(a != null && b != null && a != '' && b != '' && a.length<50) {  //null -отмена
//        personalMovieDB.movies[a] = b;
//        console.log('done');
//    } else {
//        console.log('error');
//        i--;
//    }
//}

let i = 0;
while(i < 2) {
    const a = prompt('Один из просмотренный фильмов?', ''),
          b = prompt('Насколько его оцените?', '');
    if (a != null && b != null && a != '' && b != '' && a.length<50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    i++;
}

//if(personalMovieDB.count<10) {
//    console.log('Просмотрено довольно мало фильмов');
//} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//    console.log('Вы классический зритель');
//} else if(personalMovieDB.count >= 30) {
//    console.log('Вы киноман');
//} else {
//    console.log('Произошла ошибка');
//}


console.log(personalMovieDB);


