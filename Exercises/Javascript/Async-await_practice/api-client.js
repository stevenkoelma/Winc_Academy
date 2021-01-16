const API_KEY = "98d18346b51fcf74d4263763e8b00003";


const getMovieGenres = async () => {
  const urlGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(urlGenre);
    const data = await res.json();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

const getFavoriteMovieById = async () => {
    const urlId = `https://api.themoviedb.org/3/find/tt6105098?external_source=imdb_id&language=en-US&api_key=${API_KEY}`;
    try {
      const res = await fetch(urlId);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getTopRatedMovies = async () => {
    const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    try {
      const res = await fetch(urlTopRated);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  

const getTopRatedMoviesAction = async () => {
    const urlTopRatedAction = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=28&api_key=${API_KEY}`;
    try {
      const res = await fetch(urlTopRatedAction);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getMoviesFrom1975 = async () => {
    const urlMoviesFrom1975= `https://api.themoviedb.org/3/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&primary_release_year=1975&api_key=${API_KEY}`;
    try {
      const res = await fetch(urlMoviesFrom1975);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };