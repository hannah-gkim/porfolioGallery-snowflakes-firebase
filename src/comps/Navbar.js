import React from "react";
import { Link } from "react-router-dom";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className="nav-div">
      <AppBar color="primary" position="static">
        <Toolbar>
          <Link to="/">
            <Typography variant="h4" color="secondary" noWrap>
              Snow Flakes
            </Typography>
          </Link>

          <Typography variant="h6" color="inherit" noWrap>
            bio
          </Typography>

          <CameraIcon className={classes.icon} />

          <button>Contact</button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
