import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
     </Provider>
  );
}


export default App;

