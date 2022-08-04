import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ title, dateReleased, rating, posterPath, overview, id }) => {
  return (
    <div className="movie-card">
      <div className="poster-container">
        <img src={`https://image.tmdb.org/t/p/w200/${posterPath}`} alt="" />
        <div className="overview">
          <p>{overview}</p>
        </div>
      </div>

      <div className="content">
        <h3>{title}</h3>
        <h4>{dateReleased}</h4>
        <Link to={`movies/${id}`}>
          <button>Get More Info</button>
        </Link>
      </div>
      <span>{rating}</span>
    </div>
  );
};

export default MovieCard;
