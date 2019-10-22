import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useForm from '../hooks/useForm';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MdMailOutline, MdVerifiedUser } from 'react-icons/md'
import axios from 'axios';
import {validate} from '../hookValidation/LoginFormValidationRules'
import { authenticationService } from '../services/authentication.service';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    padding: '10px',
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SigninSide() {

  const classes = useStyles();

  const submitHandler = () =>{
    setIsLoading(true)
    const user = {email: values.email, 
                  password: values.password}  
      //status code should be 401 here instead

      authenticationService.login(user.email, user.password)
      .then(data =>{
        const {trainer} = data.data
        setIsLoading(false);
        console.log(trainer)
        const { from } = this.props.location.state || {from: {pathname: "/"}};
        this.props.history.push(from);
      }).catch(err =>{
        console.log(err)
      })
  }
  const [isLoading, setIsLoading] = React.useState(false)
  const { values, errors, handleChange, handleSubmit } = useForm(submitHandler, validate);
  console.log(values)


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              error={errors.email ? true : false}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText={errors.email ? errors.email : ''}
              autoFocus
              onChange={handleChange}
              value={values.email || ''}
              required
              InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                          <MdMailOutline size={20} />
                        </InputAdornment>
                  )
              }}
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
              onChange={handleChange}
              value={values.password || ''}
              required
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <MdVerifiedUser size={20} />
                      </InputAdornment>
                )
            }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isLoading ? <Loader 
              type="TailSpin" 
              height={20}
              width={20}
              color="#00ffff"/> : 'Sign In'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
