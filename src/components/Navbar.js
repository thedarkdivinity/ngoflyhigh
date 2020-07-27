import React from "react";
import { NavLink } from "react-router-dom";
import Navitem from "../mapped/Navitem";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top navbar-dark ">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            Fly High
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {Navitem.map((item) => {
                return (
                  <li className="nav-item px-5" key={item.id}>
                    <NavLink
                    
                      className="nav-link text-white"
                      aria-current="page"
                      to={item.goto}
                    >
                      {item.content}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
