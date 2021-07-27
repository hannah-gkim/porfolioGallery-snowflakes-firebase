import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import ScrollToColor from "./ScrollToColor";
import InstagramButton from "./InstagramButton";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    textTransform: "none",
    justifyContent: "flex-start",
    marginLeft: "30px",
    color: "#404040",
    "&:hover": {
      color: "#A0A0A0",
    },
  },

  toolbar: theme.mixins.toolbar,
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <ScrollToColor>
        <AppBar elevation={0}>
          <Grid container spacing={2} alignItems="center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                edge="start"
                className={classes.title}
                variant="h4"
                noWrap
              >
                Snowflakes
              </Typography>
            </Link>

            <Grid item xs container direction="row-reverse">
              <InstagramButton />
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="h4"
                  className={classes.toolbar}
                  edge="end"
                  noWrap
                >
                  Contact
                </Button>
              </Link>
              <Link to="bio" style={{ textDecoration: "none" }}>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="h4"
                  className={classes.toolbar}
                  edge="end"
                  noWrap
                >
                  Bio
                </Button>
              </Link>

              <Link to="login" style={{ textDecoration: "none" }}>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="h4"
                  className={classes.toolbar}
                  edge="end"
                  noWrap
                >
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>
        </AppBar>
      </ScrollToColor>
    </Toolbar>
  );
}

export default Navbar;
