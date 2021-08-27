import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//pages
import Home from './page/home/index';
import Dashboard from './page/adminPanel/index';
import Login from './page/adminPanel/components/Login';

//utils
import Navbar from './utils/Navbar'
import PrivateRoute from './utils/PrivateRoute';

//Redux setup
import store from './redux/store'
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
            <Router>
              <Navbar />
              <div > 
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/admin/login" component={ Login } />
                  <PrivateRoute exact path="/admin/dashboard" component={ Dashboard } />
                </Switch>
                
              </div>
          </Router>
      </ThemeProvider>
     </Provider>
  );
}

const theme = createMuiTheme({
  palette: {
     primary: {
       main: '#6AAF06', //#6AAF06
      green:'#10991e',
      dark:'#101F25'
    },
    secondary: {
      main:'#ff0000',
      red: '#FAE3E3',
    },
  },
});

export default App;

