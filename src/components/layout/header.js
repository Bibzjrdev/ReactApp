import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Todolist</h1>
      <Link to="/ReactApp" style={LinkStyle}>Home</Link> | <Link to="/about" style={LinkStyle}>About</Link>
    </header>
  );
}

const headerStyle = {
  background: "teal",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const LinkStyle = {
  color: "#fff",
  TextDecoder: "none",
}

export default Header;
