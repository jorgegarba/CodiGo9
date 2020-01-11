import React from 'react';

const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
          {props.t}
        </span>
      </nav>
    </header>
  );
}

export default Header;
