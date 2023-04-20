import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { HiPlusSm } from "react-icons/hi";

const CardMovie = ({ movie }) => {
  return (
    <div className="card__movie">
      <div className="card__movie__preview">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
        />
      </div>

      <div
        className="card__movie__detail"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mask"></div>
        <div className="card__movie__detail__wrapper">
          <div className="card__movie__name">
            {movie?.title || movie?.original_title}
          </div>
          <div className="card__movie__desc">
            <p>{movie?.overview}</p>
          </div>
          <div className="card__movie__actions">
            <button className="card__movie__action__btn">
              <BsFillPlayFill className="icon" /> <span>Watch now</span>
            </button>
            <button className="card__movie__action__btn">
              <HiPlusSm className="icon" /> <span>Add to list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
