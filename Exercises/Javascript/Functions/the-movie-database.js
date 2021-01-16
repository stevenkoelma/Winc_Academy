// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."



// // Object

const favoriteMovie = {
    title: 'Saving Private Ryan',
    duration: 200,
    stars: ["Tom Hanks", "Matt Damon", " en Vin Diesel"]
};



let movieInformation = function (title, duration, stars) {
    console.log (" Mijn favoriete film heet " + title + " en duurt " + duration + " minuten. De grote sterren heten: " + stars)
}

movieInformation (favoriteMovie.title, favoriteMovie.duration, favoriteMovie.stars)
