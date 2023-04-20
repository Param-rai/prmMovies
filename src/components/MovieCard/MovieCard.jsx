import "./MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, category }) => {
  return (
    <div className="movie__card">
      <Link to={`/${category}/${movie?.id}/info`} className="movie__image">
        <img
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
              : `https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
          }
          alt=""
        />
      </Link>
      <div className="movie__title">{movie?.name || movie?.title}</div>
    </div>
  );
};

export default MovieCard;
