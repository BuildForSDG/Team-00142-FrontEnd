import React from 'react';
import Riser from './Riser';

const NavBar = () => {
  return (
    <div className="navbar-fixed" style={divStyle}>
      <nav>
        <div className="nav-wrapper lime lighten-5">
          <a href="#!" className="brand-logo">
            <Riser />
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="">Register</a>
            </li>
            <li>
            <a href="sass.html"><i class="material-icons left">search</i>Link with Left Icon</a>
            </li>
            <li>
            <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Log in</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="Home.html">Home</a>
        </li>
        <li>
          <a href="badges.html">About</a>
        </li>
        <li>
          <a href="collapsible.html">Projects</a>
        </li>
        <li>
          <a href="mobile.html">Register</a>
        </li>
        <a href="sass.html"><i class="material-icons left">search</i>Link with Left Icon</a>
        <li>
        <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Log in</a>
        </li>
      </ul>
    </div>
  );
};
const divStyle = {
  // color: 'black',
  // position: 'relative',
  // left: '700px',
  // width: '100%',
  // marginBottom: '0px',
};

export default NavBar;
