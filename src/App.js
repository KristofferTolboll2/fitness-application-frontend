import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import orange from '@material-ui/core/colors/orange'
import { ThemeProvider } from '@material-ui/core/styles'
import SigninSide from './signup/SigninSide'
import './App.css';
import { Router, Route, Link } from 'react-router-dom';
import { history } from './helpers/history'
import { PrivateRoute } from './routes/PrivateRoute'
import { authenticationService } from './services/authentication.service';
import Dashboard from './components/Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: orange
  }
})

class App extends Component {

  state ={
    currentUser: null
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }
  
  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    return (
      <Router history={history}>
      <ThemeProvider theme={theme}>
      <div className="App">
      <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={SigninSide} />
      </div>
      </ThemeProvider>
      </Router>
    );
  }
}

export default App;
