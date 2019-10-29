import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'
import { ThemeProvider } from '@material-ui/core/styles'
import SigninSide from './signup/SigninSide'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import AuthComponent from './routing/auth/AuthComponent'
import RoutingComponent from './components/RoutingComponent';
import Profile from './components/profile/Profile';
import {Router} from 'react-router'
import history from './routing/history/history'

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: orange,
    danger: red,
    success: green
  }
})

class App extends Component {

  render() {
    return (
      <Router history={history}>
      <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
      <Route path={'/login'} exact component={SigninSide} forceRefresh={true} />
      <AuthComponent>
        <Route path={'/dashboard'} render={() => <RoutingComponent />} />
        <Route path={'/profile'} component={() => <Profile/>} />
      </AuthComponent>
      </Switch>
      </div>
      </ThemeProvider>
      </Router>
    );
  }
}

export default App;
