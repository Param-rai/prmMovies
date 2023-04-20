import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.scss";
import { HiOutlineStar } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import CardMovie from "./cardMovie/CardMovie";
import tmdbApi from "../../api/tmdbApi";

const Header = ({ bar }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await tmdbApi.getTrendingMovies("movie", "day");
      setMovies(response.results);
      bar.current.complete();
    };

    fetchMovies();
  }, []);

  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[0]?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="wrapper">
        <div className="container">
          <Navbar bar={bar} />
          <div className="movie">
            <div className="movie__name">
              {movies[0]?.title || movies[0]?.original_title}
            </div>
            <div className="movie__info">
              <div className="movie__info__item">
                <HiOutlineStar />
                <span>IMDB : {movies[0]?.vote_average}</span>
              </div>
              <div className="movie__info__item">
                <BiTimeFive />
                <span>DURATION : 2Hrs </span>
              </div>
              <div className="movie__info__item">
                <AiOutlineCalendar />
                <span>Year : {movies[0]?.release_date}</span>
              </div>
            </div>
            <div className="movie__desc">
              <p>{movies[0]?.overview}</p>
            </div>
            <div className="movie__actions">
              <button className="movie__action__btn">
                <BsFillPlayFill /> <span>Watch now</span>
              </button>
              <button className="movie__action__btn">
                <GrFormAdd />
                <span>Add to list</span>
              </button>
            </div>
          </div>

          <div className="cardWrapper">
            <CardMovie movie={movies[1]} />
            <CardMovie movie={movies[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
