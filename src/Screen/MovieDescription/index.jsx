import React from "react";
import "./style.css";

const MovieDescription = ({ click, data, setPopup }) => {
  const description = data.find((item) => item.show.id === click);
  return (
    <div>
      <div
        className="image-background"
        style={{
          backgroundImage: `url(${description.show.image.original})`,
          height: "700px",
          objectFit: "fill",
          backgroundSize: "100% 700px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="movie-header">{description.show.name}</div>
      <div className="movie-summary">{description.show.summary}</div>
      <button onClick={() => setPopup(true)}>Book Now</button>
    </div>
  );
};

export default MovieDescription;
