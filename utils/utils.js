const moment = require("moment");

const maxProfitMovies = (sorted_movie) => {

    sorted_movie.sort((a, b) => {
        let s1 = moment(a["Start Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
        let s2 = moment(b["Start Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
        let e1 = moment(a["End Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
        let e2 = moment(b["End Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
        if (s1 < s2)
            return -1;
        if (s1 > s2)
            return 1;
        else {
            if (e1 < e2)
                return -1;
            if (e1 > e2)
                return 1;
            return 0;
        }
    });

    let final_movies_list = []
    let mx = 0;
    for (i = sorted_movie.length - 1; i > -1; i--) {
        let movie = sorted_movie[i];
        let temp_movies = [];
        temp_movies.push(movie);
        let c = 1;
        let start1 = moment(movie["Start Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
        let end1 = moment(movie["End Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
        for (j = i - 1; j > -1; j--) {
            start2 = moment(sorted_movie[j]["Start Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
            end2 = moment(sorted_movie[j]["End Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
            if (end2 < start1) {
                temp_movies.unshift(sorted_movie[j]);
                c += 1;
                start1 = start2;
                end1 = end2;
            }
            if (mx < c) {
                mx = c;
                final_movies_list = temp_movies;
            }
        }
    }

    return final_movies_list;

}

module.exports = maxProfitMovies;