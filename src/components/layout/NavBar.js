import React  from 'react';
import Riser from './Riser';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar" style={divStyle}>
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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
            <a href="sass.html"><i className="material-icons left">search</i>Link with Left Icon</a>
            
            </li>
            <li>

            <a class="waves-effect orange accent-1 btn"><i class="material-icons right">trending_up</i>Login</a>

            <a className="waves-effect orange accent-1 btn"><i className="material-icons right">trending_up</i>Log in</a>

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
        <a href="sass.html"><i className="material-icons left">search</i>Link with Left Icon</a>
        <li>
        <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>Log in</a>
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
