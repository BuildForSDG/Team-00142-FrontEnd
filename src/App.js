import React,{useEffect, Fragment} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import NavBar from './components/layout/NavBar';
import Community from './components/community/Community';
import Group from './components/group/Group';
import Success from './components/success/Success';
import Slide from  './components/layout/Slide';
import Header from './components/layout/Header';

import "./App.css";
import "./slider-animations.css";

const App = () => {
  useEffect(() =>{
    //Init Materialize JS
    M.AutoInit();
  })
  return (
  <Fragment>
   <Header/>
    <NavBar/>
    
    <Slide/>
    <Community/>
    <Group/>
    <Success/>
    <div className="container">
    
    </div>
   
  </Fragment>
  );
};

export default App;
