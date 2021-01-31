"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == "" || personalMovieDB.count == null ||
            personalMovieDB.count == isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
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
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },
    tooglevisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeMyGenres: function () {
        for (let i = 1; i <=3; i++) {
        let genre = (`Ваш любимый жанр под номером ${i}`);
        if (genre === "" || genre == null) {
            console.log('Вы ввлели неверные данные или вовсе');
            --i;
        } else {
            personalMovieDB.genres[i - 1] = genre;
        }
    }
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
}
};