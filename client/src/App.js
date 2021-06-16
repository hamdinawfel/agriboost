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
      main: '#3f51b5', // rgb(232, 36, 48)
      green:'#10991e'
    },
    secondary: {
      main:'#10991e',
      red: '#FAE3E3',
    },
  },
});

export default App;


