const setMovieGenres = async () => {
  moviegenreslist = document.getElementById("movieGenresList"); // Plek in DOM selecteren
  const data = await getMovieGenres(); // Toegang tot API
  data.genres.forEach((moviegenre) => {
    // Loop over genres
    const newListItem = document.createElement("li"); // Li aanmaken
    const textListItem = document.createTextNode(
      // Textnode aanmaken
      `Genre naam is: ${moviegenre.name}, ID: ${moviegenre.id}` // Toegang tot namen en id's genre
    );

    newListItem.append(textListItem); // Textnode toevoegen aan nieuwe Li
    moviegenreslist.append(newListItem); // L met textnode toevoegen aan DOM
  });
};

const setFavoriteMovie = async () => {
  const data = await getFavoriteMovieById(); // Toegang tot API
  const movieTitle = data.movie_results[0]; // Toegang tot movietitel
  favoritemovie = document.getElementById("favoritemovie"); // Plek in DOM selecteren
  favoritemovie.append(document.createTextNode(movieTitle.title)); // Toevoegen aan DOM
};

const setTopRatedMovies = async () => {
  topratedmovies = document.getElementById("topratedmovies");
  const data = await getTopRatedMovies();
  const topTenMovies = data.results.slice(0, 10);
  topTenMovies.forEach((movie) => {
    const newListItem = document.createElement("li");
    const textListItem = document.createTextNode(
      `Titel: ${movie.title}, Average rating: ${movie.vote_average}`
    );

    newListItem.append(textListItem);
    topratedmovies.append(newListItem);
  });
};

const setTopRatedMoviesAction = async () => {
  topratedmoviesaction = document.getElementById("topratedmoviesaction")
  const data = await getTopRatedMoviesAction();
  const topTenMovies = data.results.slice(0,10);
  topTenMovies.forEach((movie) => {
    const newListItem = document.createElement("li");
    const textListItem = document.createTextNode(
      `Titel: ${movie.title}, Average rating: ${movie.vote_average}`
    );

    newListItem.append(textListItem);
    topratedmoviesaction.append(newListItem);
  });
}

const setMovies1975 = async () => {
  movies1975 = document.getElementById("movies1975")
  const data = await getMoviesFrom1975();
  const movies = data.results
  movies.forEach((movie) => {
    const newListItem = document.createElement("li");
    const textListItem = document.createTextNode(
      `${movie.title}`
    );

    newListItem.append(textListItem);
    movies1975.append(newListItem);
  });
}

setTopRatedMoviesAction();
setMovieGenres();
setFavoriteMovie();
setTopRatedMovies();
setMovies1975();