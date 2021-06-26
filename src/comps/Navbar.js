import React from "react";
import { Link } from "react-router-dom";
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { palette } from '@material-ui/system'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <AppBar color="transparent">
      <Toolbar className={classes.toolbar}>
      
      <Link to="/">
        
      <Typography edge="start" className={classes.title} color="inherit" variant="h2" noWrap>Snowflakes</Typography>
      </Link>

      <Link to="/">
      <Typography variant="h4" className={classes.toolbar} edge="end" noWrap>Bio</Typography>
      </Link>  
        <Link to="/hannah">
          <Typography variant="h4" noWrap>Gallery</Typography>
        </Link>

        
        <CameraIcon />
       
        <Button>Contact</Button>
      
      </Toolbar>
      </AppBar>
      </div>
  );
}
