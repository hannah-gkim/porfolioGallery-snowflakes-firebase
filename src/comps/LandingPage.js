import React from "react";
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  toolbar: theme.mixins.toolbar
}));

function LandingPage() {
  return (
    <div>

    <div className="landingPage-div2">
      <img  src="https://images.unsplash.com/photo-1528696892704-5e1122852276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib"  />
    </div>
      <div className="landingPage-div">
      <Link to="/hannah">
        <img
          alt="hannahGallery"
          src="https://wallpaperaccess.com/full/4785873.jpg"
          />
      </Link>
    </div>
          </div>
  );
}

export default LandingPage;
