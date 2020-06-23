import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import NavBar from './components/layout/NavBar';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Register from './components/pages/Register';
import IndividualCommunity from './components/community/IndividualCommunity';
import IndividualGroup from './components/group/IndividualGroup';
import IndividualYouth from './components/youth/IndividualYouth';
import './App.css';
import './CustomStyle.css'
import './slider-animations.css';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <Router>
      <Fragment>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/individualCommunity/:id" component={IndividualCommunity} />
          <Route exact path="/individualGroup/:id" component={IndividualGroup} />
          <Route exact path="/individualYouth/:id" component={IndividualYouth} />
          {/* <Route exact path="/login" component={Login} /> */}

        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
