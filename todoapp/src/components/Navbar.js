import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom"

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <li className="brand-logo left">
          Fun times...
        </li>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/upload">Upload</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

// This gives Navbar component HOC ability so it can access props
export default withRouter(Navbar);