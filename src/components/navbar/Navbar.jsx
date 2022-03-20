import React from "react";
import { NavLink } from "react-router-dom";
import pokeball from "../../assets/images/pokeball.png";
import "./Navbar.scss";

export function Navbar() {
  return (
    <div className="navigation">
      <NavLink to="/">
        <img className="pokeball" src={pokeball} alt="Pokeball." />
      </NavLink>
      <ul className="list-inline navigation-list">
        <li>
          <NavLink to="/">
            <i className="fas fa-home"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <i className="fas fa-search"></i>
          </NavLink>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
