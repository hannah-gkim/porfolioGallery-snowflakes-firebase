import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-div">
      <Link to="/">
        <h1>Gallery Name</h1>
      </Link>

      <nav >
        <h2>bio</h2>
        <Link to="/hannah">
          <h2>Gallery</h2>
        </Link>

        <h2>instagram Logo</h2>
        <button>Contact</button>
      </nav>
    </div>
  );
}
