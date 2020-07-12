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

    let final_movies_list = [sorted_movie[sorted_movie.length - 1]]
    let start1 = moment(sorted_movie[sorted_movie.length - 1]["Start Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
    for (i = sorted_movie.length - 2; i > -1; i--) {
        let movie = sorted_movie[i];
        start2 = moment(sorted_movie[i]["Start Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
        end2 = moment(sorted_movie[i]["End Date"], "D MMM").format("YYYY-MM-DD[T]HH:mm:ss")
        if (end2 < start1) {
            final_movies_list.unshift(movie);
            start1 = start2;
        }
    }
    return final_movies_list;
}

module.exports = maxProfitMovies;