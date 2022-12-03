import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//pages
import Home from './page/home/Index';
import Reclamation from './page/reclamation/Index';
//utils
import Navbar from './utils/Navbar';
import PageNotFound from './utils/PageNotFound';
//Redux setup
import store from './redux/store';
import { Provider } from 'react-redux';
import Reservation from './page/reservation/Reservation';
import Inscription from './page/reservation/Inscription';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/reclamation" component={Reclamation} />
              <Route exact path="/reservation" component={Reservation} />
              <Route exact path="/inscription" component={Inscription} />
              <Route component={PageNotFound} />
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
      main: '#6AAF06',
      green: '#10991e',
      dark: '#101F25',
    },
    secondary: {
      main: '#ff0000',
      red: '#FAE3E3',
    },
  },
});

export default App;
