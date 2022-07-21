import React from "react";
import { NavLink } from "react-router-dom";

import "../style/components/header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">Elo</div>
      <div className="header-nav">
        <NavLink className="header-nav-item" exact to="/" activeClassName="selected">
          Home
        </NavLink>

        <NavLink className="header-nav-item" to="/about" activeClassName="selected">
          About
        </NavLink>

        <NavLink className="header-nav-item" to="/services" activeClassName="selected">
          Services
        </NavLink>

        <NavLink className="header-nav-item" to="/projects" activeClassName="selected">
          Projects
        </NavLink>

        <NavLink className="header-nav-item" to="/contact" activeClassName="selected">
          Contact
        </NavLink>
      </div>
    </header>
  );
}
