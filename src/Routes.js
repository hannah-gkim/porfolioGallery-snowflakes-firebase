import React from "react";
// import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LandingPage from "./comps/LandingPage";
import HannahGallery from "./comps/HannahGallery";
import LandingPage from "./comps/LandingPage";
import { AuthProvider } from "./hooks/AuthContext";
import Login from "./comps/Login";

function Routes() {
  return (
    <div>
      <AuthProvider>
        <Switch>
          <Route exact path="/hannah" component={HannahGallery} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default Routes;
