import React, {useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import https from "https";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {useHistory} from "react-router-dom";
import Layout from "../Components/layout";
import Loading from "../Components/loading";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DVLP CMATER Jadavpur University
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const messag = "mailto:no-one@snai1mai1.com?subject=Unable to Sign In&body=Hi,I am <Name> %0D%0A my username: <Your Username> %0D%0A registered mail id: <email address> %0D%0A my Contact Number: <your mobile number>. %0D%0A Please retrieve my credentials.%0D%0A Thanks."

  const [uname,setUname] = useState('');
  const [pass,setPass] = useState('');
  const [open, setOpen] = React.useState(false);
  const [erroropen , seterror ] = React.useState(false);
  const [ message , setmsg ] =  React.useState(false);
  const [loading , setloading ] = React.useState(false);

  let history = useHistory();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    seterror(false);
  };
  
  const authenticate = ()=>{
        const data={
          username: uname,
          password: pass,
        }
        setloading(true);

        // axios.defaults.withCredentials = true;
        axios.post(
          "https://gobackauth.herokuapp.com/login",
          data
        ).then(res=>{
          setloading(false);
          console.log(res)
          localStorage.setItem('token' , res.data.token);
          setOpen(true);
          history.push('/form')
        }).catch((err)=>{
          console.log(err)
          setmsg(err.message);
          seterror(true);

        })
  }
  return (
    <Container component="main" className='bg-white' maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* <form className={classes.form} noValidate> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setUname(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=> setPass(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=> authenticate()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href={messag} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        {/* </form> */}
      </div>

      { loading && <Loading />}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Successfully logged in ! 💫
          </Alert>
        </Snackbar>
        <Snackbar open={erroropen} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Error , failed to log in: {message}
          </Alert>
        </Snackbar>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}