"use strict";

const numberOfFilms = +prompt("Сколько фильмов просмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

// const a = prompt("Один из последних просмотренных фильмов?", ""),
// 	b = prompt("На сколько вы его оцените?", ""),
// 	c = prompt("Один из последних просмотренных фильмов?", ""),
// 	d = prompt("На сколько вы его оцените?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		b = prompt("На сколько вы его оцените?", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB[a] = b;
		console.log("Done");
	} else {
		console.log("Error");
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("Вы посмотрели мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log("Вы обычный зритель");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман");
}
console.log(personalMovieDB);
