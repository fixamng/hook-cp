import React from "react";
// import withMovie from './withMovie'

const Result = ({ movie }) => {
  return (
    <div className="result">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title} </h3>
    </div>
  );
};

export default Result;
