import React from "react";
import "./style.css";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={movie.show.image.medium} alt="None" />
      <div className="movie-name-header-small">
        {movie.show.name}({movie.show.language})
      </div>
      <div className="movie-genre">{String(movie.show.genres)}</div>
    </div>
  );
};

export default MovieCard;
