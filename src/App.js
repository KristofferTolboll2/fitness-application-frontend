import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import orange from '@material-ui/core/colors/orange'
import { ThemeProvider } from '@material-ui/core/styles'
import SigninSide from './signup/SigninSide'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AuthComponent from './routing/auth/AuthComponent'
import Dashboard from './dashboard/Dashboard'

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: orange
  }
})

class App extends Component {

  render() {
    return (
      <Router>
      <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
      <Route path={'/login'} exact component={SigninSide} />
      <AuthComponent>
        <Route path={'/dashboard'} component={Dashboard} />
      </AuthComponent>
      </Switch>
      </div>
      </ThemeProvider>
      </Router>
    );
  }
}

export default App;
