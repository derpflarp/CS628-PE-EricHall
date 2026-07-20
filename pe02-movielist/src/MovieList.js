import { useState } from "react";
import "./MovieList.css";

const movieData = [
  { title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
  { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
  { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
  { title: "Interstellar", genre: "Science Fiction", releaseYear: 2014 },
  { title: "Top Gun: Maverick", genre: "Action", releaseYear: 2022 },
  { title: "The Godfather", genre: "Crime", releaseYear: 1972 }
];

function MovieList() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = [
    "All Genres",
    ...new Set(movieData.map(movie => movie.genre))
  ];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movieData
      : movieData.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="container">
        <h1>Eric Hall's Movie List</h1>

        <p className="subtitle">
            Browse movies by genre. Click any movie to see its title.
        </p>

        <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
        >
            {genres.map((genre) => (
          <option key={genre}>{genre}</option>
        ))}
      </select>

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            className="movie-card"
            onClick={() => alert(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;