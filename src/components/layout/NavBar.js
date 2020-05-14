import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ marginBottom: '10px' }} className="blue">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Home</a>
          </li>
          <li>
            <a href="badges.html">About</a>
          </li>
          <li>
            <a href="collapsible.html">Register</a>
          </li>
          <li>
            <a href="collapsible.html">Login</a>
          </li>
          <li>
            <a href="collapsible.html">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
