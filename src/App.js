import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/header";
import Splash from "./Components/splash";
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/Components/GlobalStyles';
import theme from 'src/theme';
// import 
function App() {
  return (
    <ThemeProvider theme={theme} >
       <GlobalStyles />
          <Router>

              <Switch>
                <Route exact path="/" >
                <Splash />
                </Route>

                <Route path="/home">
                  <Header />
                  
                </Route>
                
                <Route path="/ranking">
                    <Rank />
                </Route>
              
              </Switch> 
          </Router>
  </ThemeProvider>
  );
}

export default App;
