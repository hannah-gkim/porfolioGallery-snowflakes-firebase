import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

function LandingPage() {
  return (
    <div>
      <div className="landingPage-div2">
        <img src="https://images.unsplash.com/photo-1528696892704-5e1122852276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib" />
      </div>
      <Container className="container" style={{ marginTop: "100px" }}>
        <div className="landingPage-div">
          <Link to="/hannah">
            <img
              alt="hannahGallery"
              src="https://wallpaperaccess.com/full/4785873.jpg"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;

{/* <div className="landingPage-div2">
<img  src="https://images.unsplash.com/photo-1528696892704-5e1122852276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib"  />
</div>
<div>

<div className="hannahlandingPage-div">
<Link to="/hannah">
  <img
    alt="hannahGallery"
    src="https://wallpaperaccess.com/full/4785873.jpg"
    />
</Link>
</div>
<span></span>
<div>
<Link to="/dylan">
<img src="https://previews.dropbox.com/p/thumb/ABOBMmXqkLylKz4npdlX5PVitUtJv-UzO2im9jDeSlksYjALyHjy-oZr8T2a5BoWozgtXHRJyxlVz0BZ-mbIn827A51MG70p-FVr5-Kgu0G8SfM0F70JlMFMUJ9YptGyGYJJtw4QRdNvaYB55uAAJONccLFOR9a1QqKNuO2CWdjwtZ5oa2P6Qyi3nb6879Da2r8H9mrSMVUhzW2FgEJ2Oxr4kvbO3_zstVx3HHtEvI4HH0unYsV8ZO44AUanJZcejBxrhOB389Va_itK8QV_qlFmFz0VaxFLrIDCoO4BkVh2ZScIlLMQqvBd94jNSeWiS-q4l5iqYX7mQeKN_dLkddOgkha6G_b9G0hd1teicplg0Q/p.jpeg" width="500" height="350" />
</Link>
</div>
    </div>
    </div> */}
