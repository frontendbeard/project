// "use strict";

const numberOfFilms = prompt("Скільки фільмів ви уже подивилися?", "");

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const   a = prompt('Останній переглянутий фільм?'),
        b = prompt('На скільки його оціните?'),
        c = prompt('Останній переглянутий фільм?'),
        d = prompt('На скільки його оціните?');

personalMuvieDB.movies[a] = b;
personalMuvieDB.movies[c] = d;

console.log(personalMuvieDB);

