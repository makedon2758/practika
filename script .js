

'use strict';

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


let numberOfFilms;

function why() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');	
	}
}

why();

function ciklesWhy() {
	for (let i = 0; i < 2; i++) {
		const wayFilm1 = prompt('Один из последних просмотренных фильмов?', '');
		const ratingFilm1 = prompt('На сколько оцените его?', '');
		if (wayFilm1 != null && ratingFilm1 != null && wayFilm1 != '' && ratingFilm1 != '' && wayFilm1.length < 50) {
			personalMovieDB.movies[wayFilm1] = ratingFilm1;
		
		} else {
			i--;
		}
	
	}
}
ciklesWhy();

function forFilm() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}
forFilm();

function showMyDB() {
	if (personalMovieDB.privat) {
		console.log(personalMovieDB.privat);
	} else {
		console.log(personalMovieDB);
	}
}

showMyDB();


function writeYourGenres() {
	
	for (let i = 1; i < 4; i++) {
		const wyFilm = prompt('Ваш любимый жанр под номером ' + (i + 1), '');
		personalMovieDB.genres[i] += wyFilm;
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
	
}

writeYourGenres();

