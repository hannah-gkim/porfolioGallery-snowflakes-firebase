import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { palette } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { shadows } from "@material-ui/system";
import InstagramIcon from "@material-ui/icons/Instagram";

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
  },
  toolbar: theme.mixins.toolbar,
}));

function Navbar() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <AppBar elevation={0} color="transparent">
        <Grid container spacing={2} alignItems="center">
          <Link to="/">
            <Typography
              edge="start"
              className={classes.title}
              color="inherit"
              variant="h2"
              noWrap
            >
              Snowflakes
            </Typography>
          </Link>

          <Grid item xs container direction="row-reverse">
            <InstagramIcon />
            <Button color="inherit">Contact</Button>
            <Button variant="h4" className={classes.toolbar} edge="end" noWrap>
              Bio
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </Toolbar>
  );
}

export default Navbar;
