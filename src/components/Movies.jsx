import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  };

  const searchOnChangeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };

  const searchHandler = (e) => {
    e.preventDefault();

    if (search) {
      return axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${search}&page=1`
        )
        .then((response) => {
          console.log(response.data.status)
          setMovies(response.data.results);
        });
    }
    getMovies();
  };

  useEffect(() => {
    getMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="movies">
      <form>
        <input
          className="input-search"
          type="text"
          onChange={(e) => searchOnChangeHandler(e)}
        />
        <button
          onClick={(e) => {
            searchHandler(e);
          }}
        >
          Search
        </button>
      </form>

      <div className="movies-container">
        {movies.length > 0 ? (
          <>
            {movies.map((movie) => (
              <MovieCard
                id={movie.id}
                rating={movie.vote_average}
                title={movie.original_title}
                dateReleased={movie.release_date}
                posterPath={movie.poster_path}
                overview={movie.overview}
              />
            ))}
          </>
        ) : (
          <>
            <h2 style={{color: '#fff', margin: '64px'}}>We don't have that movie on our database</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Movies;
