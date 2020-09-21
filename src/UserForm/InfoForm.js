import React from 'react';
import { useState , useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function AddressForm({func , state}) {

  const [firstName , setfn] = useState(state.pers.fn);
  const [lastName , setln] = useState(state.pers.ln);
  const [email , setemail] = useState(state.pers.email);
  const [route , setroute] = useState(state.pers.route);
  const [ img , setimg] = useState(state.pers.profile);


  useEffect(() =>{
      setfn( state.pers.fn);
      setln( state.pers.ln);
      setemail( state.pers.email);
      setroute(state.pers.route);
      setimg( state.pers.profile);
  })

  const handlefn = (e) => {
      setfn(e.target.value);
      let s = state;
      s.pers.fn = e.target.value;
      func(s);
      
  }
  const handleln = (e) => {
      setln(e.target.value);
      // func( {pers : { ln : e.target.value }});
      let s = state;
      s.pers.ln = e.target.value;
      func(s);
  }
  const handleEmail = (e) => {
      setemail(e.target.value);
      let s = state;
      s.pers.email = e.target.value;
      func(s);
  }
  const handleRoute = (e) => {
      setroute(e.target.value);
      let s = state;
      s.pers.route = e.target.value;
      func(s);
  }
  
  const handleImg = (e) => {
      setimg(e.target.files[0]);
      let s = state;
      s.pers.profile = e.target.files[0];
      func(s);
  }




  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            value={firstName}
            autoComplete="given-name"
            variant="outlined"
            onChange={(e) => handlefn(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            value={lastName}
            autoComplete="family-name"
            variant="outlined"
            onChange={(e) => handleln(e)}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            value={email}
            variant ="outlined"
            onChange={(e) => handleEmail(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="route"
            name="route"
            label="Route for personal page"
            fullWidth
            value={route}
            variant="outlined"
            onChange={(e) => handleRoute(e)}
          />
        </Grid>
        
        <Grid item sm={4}></Grid>
        <Grid item xs={12} sm={6} >
        <label htmlFor="upload-photo">
            <input
                style={{ display: 'none' }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={(e) => handleImg(e)}
            />

            <Fab
                color="secondary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
            >
                <AddIcon /> Upload photo
            </Fab>
            </label>
            {
              img!== "" ? <div><span>{img.name} {Math.round(img.size/ (1024))} KB</span></div> : <div/>
            }
    </Grid>
    <Grid item sm={3}></Grid>
      </Grid>
    </React.Fragment>
  );
}
