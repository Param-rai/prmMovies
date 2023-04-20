import React from "react";
import "./Navbar.scss";
import { RxAvatar } from "react-icons/rx";
import Logo from "../../logo/Logo";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";
import { BsHearts } from "react-icons/bs";

const Navbar = ({ type, bar }) => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="list">
        <li className={`list__item ${!type && "active"}`}>
          <Link to={"/"} onClick={() => bar.current.staticStart()}>
            Home
          </Link>
        </li>
        <li className={`list__item ${type === "movie" && "active"}`}>
          <Link to={"/movie"} onClick={() => bar.current.staticStart()}>
            <BiCameraMovie className="list__item__icon" />
            <span>Movies</span>
          </Link>
        </li>
        <li className={`list__item ${type === "tv" && "active"}`}>
          <Link to={"/tv"} onClick={() => bar.current.staticStart()}>
            <SlScreenDesktop className="list__item__icon" />
            <span>Tv series</span>
          </Link>
        </li>
        {/* <li className={`list__item ${type === "list" && "active"}`}> */}
        {/* <Link to={"/list"} onClick={() => bar.current.staticStart()}>
            <BsHearts className="list__item__icon" />
            <span>My List</span>
          </Link> */}
        {/* </li> */}
        <li className="profile">
          <span className="profile__text">Param rai</span>
          <RxAvatar />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
