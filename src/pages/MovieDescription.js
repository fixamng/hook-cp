import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Movies } from "../data/MovieList";

const MovieDescription = () => {
  const { id } = useParams();
  const movie = Movies.filter((movie) => movie.id === Number(id));
  console.log(movie);

  return (
    <div>
      <nav>
        <Link to={`/`} className="movie-link">
          <h3>Home</h3>
        </Link>
      </nav>

      <main className="description-main">
        <section>
          <div className="plot-container">
            <div>
              <h3>{movie[0].title}</h3>

              <img src={movie[0].posterUrl} alt={movie[0].title} />
            </div>
            <div className="plot">
              <p>{movie[0].description}</p>
            </div>
          </div>
          <div className="trailer">
            <h2>Watch Trailer</h2>
            <iframe
              width="700"
              height="415"
              src={movie[0].trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MovieDescription;
