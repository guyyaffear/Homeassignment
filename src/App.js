

import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import NavAppbar from './components/NavAppBar/index'
import homePage from "./pages/homePage";

// import "./App.css";

require('typeface-comfortaa');

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Comfortaa',
    ].join(','),
  },
  palette: {
    background: {
      default: "#a6bad1",
    },
    text: {
      primary: "#ffffff"
    },
  }
})

/**
 * 
 */
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter >
        <NavAppbar/>
        <Grid container direction="row" background="primary">
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
              {/* 
                Pages 
              */}
              <Switch>
                <Route exact path={["/","/homepage"]} component={homePage} />
              </Switch> 
            </Grid>
            <Grid item xs={1}>
            </Grid>
          </Grid>
        </BrowserRouter>
      </ThemeProvider>
    );

  }
}
export default App;

