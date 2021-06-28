import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Typography } from "@material-ui/core";

const images = [
  {
    url: "https://wallpaperaccess.com/full/4785873.jpg",
    title: "hannah",
    width: "500px",
    height: "350px",
    // marginLeft: "60px",
    // marginRight: "60px",
    // marginBottom: "70px",
  },
  {
    url: "https://i.ibb.co/qyM0FB9/IMG-8700.jpg",
    title: "dylan",
    width: "500px",
    height: "350px",
    // marginLeft: "60px",
    // marginRight: "60px",
    // marginBottom: "70px",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },

  image: {
    border: "10px solid white",
    position: "relative",
    height: 600,
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: "300px",
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className="landingPage-div2">
          <img src="https://images.unsplash.com/photo-1528696892704-5e1122852276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib" />
        </div>
        <h2
          style={{
            marginTop: "100px",
            marginLeft: "10%",
            marginRight: "10%",
            color: "gray",
            textAlign: "center",
          }}
        >
          “Taking an image, freezing a moment, reveals how rich reality truly
          is.” — Anonymous
        </h2>
        <Container
          className="container"
          style={{
            marginTop: "100px",

            marginBottom: "100px",
          }}
        >
          {images.map((image) => (
            <ButtonBase
              focusRipple
              key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
              {image.title === "hannah" ? (
                <Link to="/hannah">
                  <span
                    className={classes.imageSrc}
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                  <span className={classes.imageBackdrop} />
                  <span className={classes.imageButton}>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      className={classes.imageTitle}
                    >
                      {image.title}
                      <span className={classes.imageMarked} />
                    </Typography>
                  </span>
                </Link>
              ) : (
                <Link to="/dylan">
                  <span
                    className={classes.imageSrc}
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                  <span className={classes.imageBackdrop} />
                  <span className={classes.imageButton}>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      className={classes.imageTitle}
                    >
                      {image.title}
                      <span className={classes.imageMarked} />
                    </Typography>
                  </span>
                </Link>
              )}
            </ButtonBase>
          ))}
        </Container>
      </div>

      <h5 style={{ textAlign: "center", marginBottom: "80px", color: "gray" }}>
        By Dylan & Hannah
      </h5>
    </>
  );
}

export default LandingPage;

{
  /* <div className="landingPage-div">
  <div>
    <Link to="/hannah">
      <img
        alt="hannahGallery"
        src="https://wallpaperaccess.com/full/4785873.jpg"
      />
    </Link>
  </div>

  <div>
    <Link to="/dylan">
      <img
        src="https://previews.dropbox.com/p/thumb/ABOBMmXqkLylKz4npdlX5PVitUtJv-UzO2im9jDeSlksYjALyHjy-oZr8T2a5BoWozgtXHRJyxlVz0BZ-mbIn827A51MG70p-FVr5-Kgu0G8SfM0F70JlMFMUJ9YptGyGYJJtw4QRdNvaYB55uAAJONccLFOR9a1QqKNuO2CWdjwtZ5oa2P6Qyi3nb6879Da2r8H9mrSMVUhzW2FgEJ2Oxr4kvbO3_zstVx3HHtEvI4HH0unYsV8ZO44AUanJZcejBxrhOB389Va_itK8QV_qlFmFz0VaxFLrIDCoO4BkVh2ZScIlLMQqvBd94jNSeWiS-q4l5iqYX7mQeKN_dLkddOgkha6G_b9G0hd1teicplg0Q/p.jpeg"
        width="500"
        height="350"
      />
    </Link>
  </div>
</div>; */
}
