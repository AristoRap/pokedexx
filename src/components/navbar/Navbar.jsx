import React from "react";
import { NavLink } from "react-router-dom";
import pokeball from "../../assets/images/pokeball.png";
import "./Navbar.scss";

export function Navbar() {
  return (
    <div className="navigation">
      <img className="pokeball" src={pokeball} alt="Pokeball." />
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
      </ul>
    </div>
  );
}
