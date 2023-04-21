import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import "./style.scss";

const Home = ({ bar }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="home">
      <Header bar={bar} />
      <div className="container mt-4">
        <Slider
          type="trending"
          title="Trending movies"
          category="movie"
          bar={bar}
        />
        <Slider
          type="popular"
          title="Popular movies"
          category="movie"
          bar={bar}
        />
        <Slider
          type="top_rated"
          title="Top rated movies"
          category="movie"
          bar={bar}
        />
        <Slider
          type="upcoming"
          title="Upcoming movies"
          category="movie"
          bar={bar}
        />
        <Slider
          type="popular"
          title="Popular Tv Shows"
          category="tv"
          bar={bar}
        />
        <Slider
          type="top_rated"
          title="Top rated Tv Shows"
          category="tv"
          bar={bar}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
