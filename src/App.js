import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
// import Splash from "./Components/splash";
import Home from "./Pages/home";
import Comingsoon from "./Pages/comingSoon";
import SignIn from "./Pages/internal"
import Contribute from "./Pages/contribute";
import Profile from "./Components/profile";
import UserForm  from "./UserForm";
import Member from "./Pages/members";
import Contact from "./Pages/contact";
import UpdatePass from "./Pages/resetPassword";


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
            <Route path="/profile" exact render={props => <Profile/>} />  
            <Route path = "/member/:url" render = {props => <Member rprops={props} /> } />
            <Route path="/form" exact render={ props => <UserForm /> } />    
            <Route path="/contacts" exact render={ props => <Contact /> } />    
            <Route path="/update" exact render={ props => <UpdatePass /> } />    
        </Switch> 
    </Router>
</div>  
  );
}

export default App;
