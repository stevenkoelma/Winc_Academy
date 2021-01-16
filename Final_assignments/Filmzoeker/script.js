const selectMovieList = document.querySelector("#movielist");
const getRadioButtons = document.getElementsByName("radio");
const getSearchBar = document.getElementById("searchbar");
const selectIMG = document.getElementsByTagName("img");
const latestMovies = 2014;

let addMoviesToDom = (movies) => {
  const getMoviesIntoListItem = movies.map((movie) => {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `<a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank"> <img src=${movie.Poster}>`;
    return newListItem;
  });

  getMoviesIntoListItem.forEach((movie) => {
    selectMovieList.appendChild(movie);
  });
};

addMoviesToDom(movies);

const addEventListener = () => {
  getRadioButtons.forEach((filterButton) => {
    filterButton.addEventListener("change", (event) => {
      handleOnChangeEvent(event.target.id);
    });
  });
  getSearchBar.addEventListener("keyup", (event) => {
    console.log(handleOnChangeEvent(event.target.value.toLowerCase()));
  });
};

addEventListener(getRadioButtons, getSearchBar);

const handleOnChangeEvent = (event) => {
  let filterMovies = null;
  switch (event) {
    case "X-Men":
    case "Avengers":
    case "Batman":
    case "Princess":
      console.log(
        (filterMovies = movies.filter((movie) => movie.Title.includes(event)))
      );

      break;
    case "Latestmovies":
      console.log(
        (filterMovies = movies.filter((movie) => movie.Year > latestMovies))
      );
      break;
    default:
      filterMovies = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(event)
      );
  }

  reset();
  addMoviesToDom(filterMovies);
};

const reset = () => {
  selectMovieList.innerHTML = "";
};
