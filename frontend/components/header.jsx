import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <figure className="logo-wrapper">
        <img alt="Classic Beats" src={window.images.logo} />
      </figure>
      <nav className="nav">
        <a href="#">Get in touch!</a>
      </nav>
    </header>
  );
}

export default Header;
