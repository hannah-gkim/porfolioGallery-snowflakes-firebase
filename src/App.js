import React from "react";
import Navbar from "./comps/Navbar";
import Routes from "./Routes";
import CssBaseline  from '@material-ui/core/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
    <div className="App">
      <Navbar />
      <Routes />
    </div>
    </React.Fragment>
  );
}

export default App;
