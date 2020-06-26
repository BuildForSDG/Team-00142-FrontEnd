import React  from 'react';
import Riser from './Riser';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar" >
      <nav>
        <div className="nav-wrapper lime lighten-5">
          <a href="#!" className="brand-logo">
            <Riser />
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="CustNav right hide-on-med-and-down">
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
          </ul>
        </div>
      </nav>
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
