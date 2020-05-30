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

import SearchBar from './components/layout/SearchBar';
// import Login from './components/Login/login.';
// import './App.css';
// import Navbar from './includes/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';



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

    <SearchBar/>
     </Fragment>
 

  );
};

export default App;
