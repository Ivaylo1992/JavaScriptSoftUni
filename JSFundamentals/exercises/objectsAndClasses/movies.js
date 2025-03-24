function movies (input) {
    let movies = [];

    for (command of input) {
        if (command.includes('addMovie')) {
            let tokens = command.split('addMovie ');
            let currentName = tokens.pop();

            movies = addMovie(currentName, movies)

        } else if (command.includes('directedBy')) {
            let tokens = command.split(' directedBy ');
            let currentName = tokens.shift();
            let currentDirector = tokens.pop();
            
            movies = addDirector(currentName, currentDirector, movies);

        } else if (command.includes('onDate')) {
            let tokens = command.split(' onDate ');
            let currentName = tokens.shift();
            let currentDate = tokens.pop();
            
            movies = addDate(currentName, currentDate, movies);
            
        }

    }

    let result = [];

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            result.push(JSON.stringify(movie))
        }
    }

    return result.join('\n')

    function addMovie (name, moviesList) {
        let newMovie = {name};

        moviesList.push(newMovie);

        return moviesList;
    }

    function addDirector (name, director, moviesList) {
        for (let movie of moviesList) {
            if (movie.name === name) {
                movie.director = director;
            }
        }

        return moviesList;
    }

    function addDate (name, date, moviesList) {
        for (let movie of moviesList) {
            if (movie.name === name) {
                movie.date = date;
            }
        }

        return moviesList;
    }

}   


console.log(movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]));