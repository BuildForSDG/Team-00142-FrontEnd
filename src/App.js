import React,{useEffect, Fragment} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import NavBar from './components/layout/NavBar';
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
    <NavBar/>
    <SearchBar/>
     </Fragment>
 
  );
};

export default App;
