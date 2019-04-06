import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';

import Header from './Components/Header/Header';
import Routes from './Routes';

import './App.css';

class App extends Component {
  render() {
    return (
     <HashRouter>
        <div className="App">
          <Header/>
          <Routes />
      </div>
     </HashRouter>
    );
  }
}

export default App;
