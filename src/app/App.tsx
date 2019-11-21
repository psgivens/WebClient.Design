import React from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Demo from './Demo';

import NavBar from './NavBar';

import '../skin/css/sample.css';
import '../skin/css/AppColors.css';
import '../skin/css/App.css';
import '../skin/css/AppLargeScreens.css';
import '../skin/css/AppSmallScreens.css';


const MainApp: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <a href="/demo">Demo</a>
      </div>
    </>
  );
}

const App: React.SFC<{}> = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/Home" component={MainApp} />
          <Route path="/Demo" component={Demo} />
          {/* <Route path="/Login" component={ Login } />
          <Route path="/BladeDemo" component={ BladeDemo } /> */}
          <Route path="/" component={MainApp} />
        </Switch>
      </>
    </Router>);
}

export default App;
