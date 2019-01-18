import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import ViewResults from '../ViewResults/ViewResults';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Search} />
          <Route exact path="/results" component={ViewResults} />
        </div>
      </Router>
    );
  }
}

export default App;
