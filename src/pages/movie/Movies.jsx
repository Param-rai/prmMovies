import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar/Navbar";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./movies.scss";
import { BiSearch } from "react-icons/bi";
import tmdbApi from "../../api/tmdbApi";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = ({ bar }) => {
  const { type } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [searching, setSearching] = useState(false);
  const [totalPages, setTotalPages] = useState(10);
  const [result, setResult] = useState(null);
  const [query, setQuery] = useState("");

  const searchQuery = async () => {
    setMovies([]);
    setSearchPage(1);
    setSearching(true);
    const res = await tmdbApi.search(type, query, searchPage);
    setTotalPages(res.total_pages);
    setResult(res.results);
    setSearching(false);

    if (query === "") {
      setResult(null);
      setPage(1);
      const res = await tmdbApi.getTrendingMovies(type, "day", page);
      setMovies(res.results);
      setTotalPages(res.total_pages);
    }
  };

  const fetchMoreResult = async () => {
    setSearchPage(page + 1);
    const res = await tmdbApi.search(type, query, searchPage);
    setTotalPages(res.total_pages);

    setResult(result.concat(res.results));
  };

  const fetchMoreMovies = async () => {
    setPage(page + 1);
    const res = await tmdbApi.getTrendingMovies(type, "day", page);
    setMovies(movies.concat(res.results));
    setTotalPages(res.total_pages);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // set page one and start fetching from the first page again if switch page
    setQuery("");
    setResult(null);
    const fetchMovies = async () => {
      setPage(1);
      const res = await tmdbApi.getTrendingMovies(type, "day", page);
      setMovies(res.results);
      bar.current.complete();
      setTotalPages(res.total_pages);
    };

    fetchMovies();
    // eslint-disable-next-line
  }, [type]);

  return (
    <div className="movies">
      <div className="container">
        <Navbar type={type} bar={bar} />
      </div>
      <div className="movies__header">
        <div className="mask"></div>
        <img src="/assets/footer.jpg" alt="" />
        <div className="movies__header__title">
          {type === "tv" ? "Tv Series" : "Movies"}
        </div>
      </div>

      <div className="container">
        <div className="movies__search mt-4">
          <input
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
              searchQuery();
            }}
            value={query}
            placeholder={`Search Your favorite ${
              type === "tv" ? "Tv Series" : "Movies"
            }`}
          />

          <button>
            <span className="text">Search</span>{" "}
            <span className="icon">
              <BiSearch />
            </span>
          </button>
        </div>

        <div className="movies">
          <InfiniteScroll
            className="movies__wrapper"
            dataLength={movies.length}
            next={result ? fetchMoreResult : fetchMoreMovies}
            hasMore={result ? searchPage !== totalPages : page !== totalPages}
            loader={
              <div
                style={{
                  textAlign: "center",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                Loading...
              </div>
            }
            endMessage={
              <div
                style={{
                  textAlign: "center",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                Thats all for now !!!
              </div>
            }
          >
            {searching && "Searching Your Result"}
            {result
              ? result?.map((movie, i) => (
                  <MovieCard movie={movie} category={type} key={i} />
                ))
              : movies.map((movie, i) => (
                  <MovieCard movie={movie} category={type} key={i} />
                ))}
          </InfiniteScroll>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
