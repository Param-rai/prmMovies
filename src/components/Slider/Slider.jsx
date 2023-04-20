import React, { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Slider.scss";
import { useState } from "react";
import tmdbApi from "../../api/tmdbApi";

export const slide = (sliderClass) => {
  const slider = document.querySelectorAll(sliderClass);
  slider?.forEach((slide) => {
    slide.addEventListener("wheel", (e) => {
      slide.scrollLeft = slide.scrollLeft + e.deltaY;
    });
  });
};

const Slider = ({ type, title, category, id, bar }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    slide(".slider .slider__wrapper");

    const fetchMovies = async () => {
      let response = null;

      switch (type) {
        case "trending":
          response = await tmdbApi.getTrendingMovies(category, "week");
          break;
        case "similar":
          response = await tmdbApi.getSimilarMovies(category, id);
          break;
        default:
          response = await tmdbApi.getMovies(type, category);
      }

      setMovies(response.results);
    };
    fetchMovies();
  }, [category, type, id]);

  return (
    <div className="slider">
      <h2 className="slider__title">{title}</h2>
      <div className="slider__wrapper">
        {movies.map((movie, i) => {
          return (
            <MovieCard
              movie={movie}
              category={category}
              key={i}
              onClick={() => bar.current.staticStart()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
