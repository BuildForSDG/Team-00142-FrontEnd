import React from 'react';


const SearchBar = () => {
  return (
  <nav  className="teal lighten-5" style= {divStyle}>
   <div className="nav-wrapper">
    <form>
      <div className="input-field">
        <input id="search"placeholder="Search" type="search"required/>
        <label className="label-icon" htmlfor="search"><i className="material-icons">search</i></label>
        <i className="material-icons">close</i>
      </div>
    </form>
  </div>
</nav>
)
}

const divStyle = {
  position: 'relative',
  left: '700px',
  width: '50%',
};

export default SearchBar;
