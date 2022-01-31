import React from "react";
import { useState } from "react";
import { Movies } from "../data/MovieList";
import MovieCard from "../components/MovieCard";
import Filter from "../components/Filter";

export const Home = () => {
  const [state, setState] = useState({
    s: "",
    results: [...Movies],
  });

  const search = (e) => {
    if (e.key === "Enter") {
      let results = Movies.filter((movie) =>
        movie.title.toLowerCase().includes(state.s.toLowerCase())
      );
      setState({ ...state, results: results }, console.log(results));
    }
  };

  const handleInput = (e) => {
    setState({ ...state, s: e.target.value });
  };

  const selectRating = (e) => {
    let results = Movies.filter(
      (movie) => movie.rating === Number(e.target.value)
    );

    setState({ ...state, results: results });
  };

  return (
    <div>
      <main>
        <Filter
          handleInput={handleInput}
          search={search}
          rating={selectRating}
        />
        <MovieCard results={state.results} />
      </main>
    </div>
  );
};
