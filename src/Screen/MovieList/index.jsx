import React from "react";

import MovieCard from "../../Components/MovieCard";
import "./style.css";
import { useNavigate } from "react-router-dom";

const MovieList = ({ setClick, data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="movie-list">
        {data.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              onClick={() => {
                setClick(movie.show.id);
                return navigate("/movie");
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
