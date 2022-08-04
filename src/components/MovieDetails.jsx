import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = ({ match }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovieDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
      });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="movie-details">
      <Link to="/">
        <button>Back</button>
      </Link>

      <div className="details-container">
        <div className="img-container">
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="text-details">
          <h1>Title: {movie.original_title}</h1>
          <h3>
            <span>Relased:</span> {movie.release_date}{" "}
          </h3>
          <h3>
            <span>Duration:</span> {movie.runtime} minutes
          </h3>
          <h3>
            <span>Revenue:</span> $ {movie.revenue}{" "}
          </h3>
          <h3>
            <span>Overview:</span> {movie.overview}{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
