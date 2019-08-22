import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">
          Fun times...
        </a>
        <ul className="right">
          <li>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar