import React from "react";
import "../styles/movie-card.css";
/**
 * {
Title: "Guardians of the Galaxy Vol. 2",
Year: "2017",
Rated: "PG-13",
Released: "05 May 2017",
Runtime: "136 min",
Genre: "Action, Adventure, Comedy",
Director: "James Gunn",
Writer: "James Gunn, Dan Abnett, Andy Lanning",
Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
Language: "English",
Country: "United States",
Awards: "Nominated for 1 Oscar. 15 wins & 58 nominations total",
Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
 * 
 */
export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
      <p>Year : {movie.Year}</p>
    </div>
  );
}
