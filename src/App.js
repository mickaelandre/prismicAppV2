import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {HomePage} from "./pages/HomePage";
import {LoginPage} from "./pages/LoginPage";
import {PrismicPage} from "./pages/PrismicPage";



class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
              <Route exact path='/' render={() => <HomePage />} />
              <Route path='/login' render={() => <LoginPage />} />
              <Route path='/prismic' render={() => <PrismicPage />} />
          </Switch>
        </Router>
    );
  }
}

export default App;
