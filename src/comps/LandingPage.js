import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage-div">
      <Link to="/hannah">
        <img
          alt="hannahGallery"
          src="https://wallpaperaccess.com/full/4785873.jpg"
        />
      </Link>
    </div>
  );
}

export default LandingPage;
