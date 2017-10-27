import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { container, navContainer, link } from "./styles.css";

const NavLinks = ({ isAuthed }) => {
  return isAuthed === true ? (
    <ul>
      <li>
        <NavLink exact={true} to="/" className={link}>
          {"Home"}
        </NavLink>
      </li>
    </ul>
  ) : null;
};

const ActionLinks = ({ isAuthed }) => {
  return isAuthed === true ? (
    <ul>
      <li>{"NEW DUCK"}</li>
      <li>
        <NavLink exact={true} className={link} to="/logout">
          {"Logout"}
        </NavLink>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <NavLink exact={true} to="/" className={link}>
          {"Home"}
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} to="/auth" className={link}>
          {"Login"}
        </NavLink>
      </li>
    </ul>
  );
};

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
};

export default function Navigation({ isAuthed }) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  );
}
