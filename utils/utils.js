const moment = require("moment");

let sorted_movie = [{
    "movie": "Bala6",
    "Start Date": "8 Feb",
    "End Date": "14 Mar"
}, {
    "movie": "Bala",
    "Start Date": "3 Mar",
    "End Date": "27 May"
}, {
    "movie": "Bala3",
    "Start Date": "3 Feb",
    "End Date": "28 Feb"
}, {
    "movie": "Bala5",
    "Start Date": "28 May",
    "End Date": "28 Dec"
}, {
    "movie": "Bala9",
    "Start Date": "3 Apr",
    "End Date": "28 Dec"
}]

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
            temp_movies.push(sorted_movie[j]);
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

console.log('Movies List: ', final_movies_list);
console.log('Total Amount : ', mx, "Cr");