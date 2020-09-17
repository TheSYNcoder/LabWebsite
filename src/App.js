import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import Splash from "./Components/splash";
import Home from "./Pages/home";
import Comingsoon from "./Pages/comingSoon";
import SignIn from "./Pages/internal"
import Contribute from "./Pages/contribute";

const Space = () => {
   return (
     <div style={{marginTop:"5em"}}></div>
   )
}
function App() {
  return (
    <div>
    <Router>
        <Switch>
            <Route exact path="/" render={props => <Home /> }/>
            <Route path="/home" exact render={props => <Home/>} />
            <Route path="/courses" exact render={props => <Comingsoon/>} />            
            <Route path="/blog" exact render={props => <Comingsoon/>} />            
            <Route path="/affiliates" exact render={props => <Comingsoon/>} />      
            <Route path="/login" exact render={props => <SignIn/>} />      
            <Route path="/contribute" exact render={props => <Contribute/>} />      
        </Switch> 
    </Router>
</div>  
  );
}

export default App;
