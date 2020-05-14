import React,{useEffect, Fragment} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import NavBar from './components/layout/NavBar';
import SearchBar from './components/layout/SearchBar';
// import './App.css';
// import Navbar from './includes/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './components/Login';

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
