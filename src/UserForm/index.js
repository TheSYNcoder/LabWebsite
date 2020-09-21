import React from 'react';
import {useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import InfoForm from './InfoForm';
import PubForm from './PubForm';
import Review from './Review';
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {useHistory} from "react-router-dom";
import Loading from "../Components/loading";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        DVLP Jadavpur University 2020
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Basic Information', 'Publication details', 'Review'];

function getStepContent(step , setState , globalState) {
  switch (step) {
    case 0:
      return <InfoForm func={setState} state={globalState} />;
    case 1:
      return <PubForm func={setState} state={globalState} />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [erroropen , seterror ] = React.useState(false);
  const [message , setmsg ] =  React.useState(false);
  const [loading ,setloading ]=  React.useState(false);
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    seterror(false);
  };

  const [ globalState , setState ] = React.useState({
    pers : {
      fn :"", 
      ln :"", 
      email :"",
      route :"",
      profile: "",
      
    },
    pubs : {
      edu : [],
      proj : [], 
      ach : [], 
      spz: [],
    },
  });

  useEffect(() =>{
      console.log('step' , activeStep);
      console.log(globalState);
      if (activeStep === steps.length){
        // do database transaction
        setloading(true);
        const data = {}
        if ( globalState.pers.fn !== "" ) data['name']= globalState.pers.fn.toString() +' '+ globalState.pers.ln.toString();   
        if ( globalState.pers.email !== "" ) data['email']= globalState.pers.email.toString(); 
        if ( globalState.pers.route !== "" ) data['route']= globalState.pers.route.toString(); 
        // if ( globalState.pers.profile !== "" ) data['profile']= globalState.pers.profile.toString(); 

        if ( globalState.pubs.edu.length > 0 ) data['education']= globalState.pubs.edu;
        if ( globalState.pubs.spz.length > 0 ) data['specialization']= globalState.pubs.spz;
        if ( globalState.pubs.ach.length > 0 ) data['achievements']= globalState.pubs.ach;
        if ( globalState.pubs.proj.length > 0 ) data['projects']= globalState.pubs.proj;

        console.log(data);
        
        var token = localStorage.getItem('token');
        axios.post("https://gobackauth.herokuapp.com/update", 
        data , {
          headers:{
            'Authorization': `Bearer ${token}` 
          }
        }
        ).then(res => {
          console.log(res);
          setOpen(true);
        }).
        catch( err => {
          console.log(err);
          setmsg(err.message);
          seterror(true);
        });

        if ( globalState.pers.profile){
          var formdata = new FormData()
          formdata.append("file", globalState.pers.profile)
          console.log(globalState.pers.profile)
          console.log(formdata);
          axios.post(
            "https://gobackauth.herokuapp.com/update-image",
            formdata,
            {
              headers:{
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'multipart/form-data',
              }
            }

          ).then(res=>{
            console.log(res)
          }).catch(err=> {
            console.log(err);
            setmsg(err.message);
            seterror(true);
          })
        }
        setloading(false);
      }
  },[activeStep]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  let history=useHistory()
  const Logout = () =>{
    localStorage.removeItem('token');
    history.push('/home');
  }
  
  return (
    <React.Fragment>
      <CssBaseline />
      
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Basic Information
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for updating your information
                </Typography>
                <Typography variant="subtitle1">
                  Your details are being updated in the database and will be shown in the website later.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={Logout}
                    className={classes.button}
                  >Logout</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep , setState , globalState)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit Form' : 'Next'}
                  </Button>

                  
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {loading && <Loading /> }
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Database successfully updated ! 💫
          </Alert>
        </Snackbar>
        <Snackbar  open={erroropen} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Error , failed to update database : {message}
          </Alert>
        </Snackbar>
        <Copyright />
      </main>
    </React.Fragment>
  );
}