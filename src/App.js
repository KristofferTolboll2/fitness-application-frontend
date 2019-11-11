import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import orange from '@material-ui/core/colors/orange'
import grey from '@material-ui/core/colors/grey'
import { ThemeProvider } from '@material-ui/core/styles'
import SigninSide from './signup/SigninSide'
import SignupSide from './signup/SignupSide'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AuthComponent from './routing/auth/AuthComponent'
import RoutingComponent from './components/RoutingComponent';
import Profile from './components/profile/Profile';
import {Router} from 'react-router'
import history from './routing/history/history'
import { indigo } from '@material-ui/core/colors';
import Messsenger from './components/chat/messages/messenger/Messenger';





const standardTheme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: orange,
  },
  status: {
    danger: 'orange',
    success: 'green'
  }
})

const darkTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: grey,
  },
  status: {
    danger: 'orange',
    success: 'green'
  }
})

class App extends Component {

  state = {
    isDarkTheme: false
  }

  setDarkTheme = () =>{
    this.setState(prevState =>({
      isDarkTheme: !prevState.isDarkTheme
    }))
  }
  render() {
    const {isDarkTheme} = this.state;
    const theme = isDarkTheme ? darkTheme : standardTheme
    return (
      <Router history={history}>
      <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
      <Route path={'/login'} exact component={SigninSide} forceRefresh={true} />
      <Route path={"/signup"} exact component={SignupSide} forceRefresh={true} />
      <AuthComponent>
        <Route path={'/dashboard'} render={() => <RoutingComponent history={history} />} />
        <Route path={'/profile/:id'} render={({match}) => <Profile  history={history} {...match}/>} />
        <Route path={'/messages'} render={({match}) => <Messsenger  history={history} {...match}/>} />
      </AuthComponent>
      </Switch>
      </div>
      </ThemeProvider>
      </Router>
    );
  }
}

export default App;
