import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Home from './page/home/index';

//utils
import Navbar from './utils/Navbar'
import Footer from './utils/Footer'
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
                </Switch>
              </div>
          <Footer />
          </Router>
     </Provider>
  );
}


export default App;

