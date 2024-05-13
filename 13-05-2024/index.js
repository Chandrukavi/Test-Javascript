document.getElementById("genreSelect").addEventListener("change", function () {
  var selectedGenre = this.value;
  var movies = document.querySelectorAll(".movie");

  movies.forEach(function (movie) {
    if (selectedGenre === "") {
      movie.style.display = "block";
    } else if (movie.id === selectedGenre) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
});


