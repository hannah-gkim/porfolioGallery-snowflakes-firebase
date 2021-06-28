import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  Button: {
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#3c52b2',
      },
      marginTop: "11px",
      marginRight: "20px"
},
}));

export default function InstagramButton() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'instagram-button' : undefined;

  return (
    <div>
      <Button aria-describedby={id} className={classes.Button} onClick={handleClick}>
      <InstagramIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
        <a href="https://www.instagram.com/hannah_gkim/" rel="noreferrer">Hannah</a>
            <p></p>
            <a href="https://www.instagram.com/infinitesilver/" rel="noreferrer">Dylan</a>
        </Typography>
      </Popover>
    </div>
  );
}

// Button: {
//     '&:hover': {
//         backgroundColor: '#ffffff',
//         boxShadow: 'none',
//       },
//       '&:active': {
//         boxShadow: 'none',
//         backgroundColor: '#3c52b2',
//       },
// },