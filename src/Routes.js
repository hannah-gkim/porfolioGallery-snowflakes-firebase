import React from "react";
// import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LandingPage from "./comps/LandingPage";
import HannahGallery from "./comps/HannahGallery";
import LandingPage from "./comps/LandingPage";
import Login from "./comps/Login";
import { AuthProvider } from "./hooks/AuthContext";
import PrivateRoute from "./comps/PrivateRoute";
import AdminPage from "./comps/AdminPage";
function Routes() {
  return (
    <div>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/admin" component={AdminPage} />
          <Route exact path="/hannah" component={HannahGallery} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default Routes;
