var movies =[ "The 100", "Riverdale", "NCIS", "Her", "Dead To Me", "Orange Is The New Black", "Chef's Table", "All American", " Black Mirror", "Queen of The South", "Black Lightning","Grey's Anatomy", "The Umbrella"]
var button = $('button')
var moviehere = $('.moviehere')

button.on('click', randomizer);

function randomizer (){
  var random = Math.floor(Math.random ()*(movies.length-1));
  var newmovies = movies[random];
  moviehere.text(newmovies);
}
