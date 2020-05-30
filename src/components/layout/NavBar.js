import React from 'react';

const NavBar = () => {
  return (
   
    <nav className="navbar white">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">About</a></li>
        <li><a href="collapsible.html">Project</a></li>
        <li><a href="mobile.html">Register</a></li>
        <li><a href="sass.html"><i class="material-icons left">search</i>Link with Left Icon</a></li>
        <a class="waves-effect waves-light btn orange lighten-4"><i class="material-icons right">redo</i>Log in</a>
      </ul>
    </div>
    <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Home</a></li>
    <li><a href="badges.html">About</a></li>
    <li><a href="collapsible.html">Projects</a></li>
    <li><a href="mobile.html">Register</a></li>
    <li><a href="sass.html"><i class="material-icons left">search</i>Link with Left Icon</a></li>
    <a class="waves-effect waves-light btn orange lighten-4"><i class="material-icons right">redo</i>Log in</a>
  </ul>
  </nav>

  

  
          
  );
};
const divStyle = {
  color: 'black',
  position: 'relative',
  left: '700px',
  width: '50%'
};

export default NavBar;
