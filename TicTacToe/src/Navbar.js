import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/TTT">TTT</NavLink>
    </nav>
  );
}
