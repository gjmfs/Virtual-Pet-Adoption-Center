import { NavLink } from "react-router-dom";
import React from "react";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import logo from "../assets/icons/logo.svg";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">
        <img id="logo" src={logo} alt="logo" />
      </NavLink>
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <img className="icons" src={menu} />
      </label>
      <label htmlFor="sidebar-active" id="overlay"></label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <img className="icons" src={close} />
        </label>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/filter">Filter by Mood</NavLink>
        <NavLink to="/add">Add a Pet</NavLink>
      </div>
    </nav>
  );
};
