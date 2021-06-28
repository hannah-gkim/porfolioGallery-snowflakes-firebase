import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import ScrollToColor01 from "./ScrollToColor";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#9CCA91",
    color: "black",
  },
  // root: {
  //   flexGrow: 1,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    // minHeight: 128,
    // alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    // alignSelf: "flex-end",
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
      <ScrollToColor01>

      <AppBar elevation={0} color="transparent">
        <Grid container spacing={2} alignItems="center">
          <Link to="/" style={{ textDecoration: 'none' }}>
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
            <InstagramIcon style={{ marginTop: "20px", marginRight: "20px" }} />
            <Button style={{ marginRight: "20px" }} color="inherit">
              Contact
            </Button>
            <Button
              style={{ marginRight: "10px" }}
              variant="h4"
              className={classes.toolbar}
              edge="end"
              noWrap
              >
              Bio
            </Button>
          </Grid>
        </Grid>
      </AppBar>
              </ScrollToColor01>
    </Toolbar>
  );
}

export default Navbar;
