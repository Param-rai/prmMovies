import React from "react";
import "./logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__mark">
        <div className="logo__mark__circle">
          <div className="logo__mark__triangle"></div>
        </div>
      </div>
      <Link to="/" className="logo__text">
        prmMovies
      </Link>
    </div>
  );
};

export default Logo;
