import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ec407a"
    },
    secondary: {
      main: '#607d8b'
    }
  }
})

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Router>,
  // </React.StrictMode>,
  document.getElementById("root")
  );
  
