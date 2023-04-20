import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./info.scss";
import Slider, { slide } from "../../components/Slider/Slider";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";

const Info = ({ bar }) => {
  const category = useParams().type;
  const id = useParams().id;
  const [info, setInfo] = useState({});

  useEffect(() => {
    slide(".info__chips");
    slide(".info__casts");

    const fetchInfo = async () => {
      const detail = await tmdbApi.getDetails(category, id);
      const credits = await tmdbApi.getCredits(category, id);
      setInfo({ detail: detail, credits: credits });
      bar.current.complete();
    };

    fetchInfo();
  }, [category, id]);

  return (
    <div className="info">
      <div
        className="info__bg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${info?.detail?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="info__header">
        <div className="container">
          <Navbar bar={bar} />

          <div className="info__div">
            <div className="info__img">
              <img
                src={
                  info?.detail?.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${info?.detail?.poster_path}`
                    : `https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
                }
                alt=""
              />
            </div>
            <div className="info__details">
              <h1 className="info__title">
                {info?.detail?.title || info?.detail?.original_title}
              </h1>
              <div className="info__chips">
                <div className="info__chip__slide">
                  {info?.detail?.genres?.map((genre, i) => {
                    return <span key={i}>{genre.name}</span>;
                  })}
                </div>
              </div>
              <p className="info__desc">{info?.detail?.overview}</p>
              <h2>Casts</h2>
              <div className="info__casts">
                {info?.credits?.cast?.map((cast) => {
                  return (
                    <div className="info__cast">
                      <div className="info__cast__img">
                        <img
                          src={
                            cast.profile_path
                              ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                              : `https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
                          }
                          alt=""
                        />
                      </div>
                      <p className="info__cast__name">{cast.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <Slider
          type="similar"
          title="Similar movies"
          id={info?.detail?.id}
          category={category}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Info;
