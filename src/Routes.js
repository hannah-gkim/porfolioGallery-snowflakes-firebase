import React from "react";
// import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
// import LandingPage from "./comps/LandingPage";
import HannahGallery from "./comps/HannahGallery";
import LandingPage from "./comps/LandingPage";
import DylanGallery from "./comps/DylanGallery"

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/hannah" component={HannahGallery} />
        <Route exact path="/dylan" component={DylanGallery}/>
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default Routes;