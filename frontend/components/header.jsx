import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <figure className="logo-wrapper">
        <img alt="Key-J" src={window.images.logo} />
      </figure>
      <div className="links">
        <a title="LinkedIn" href="https://www.linkedin.com/in/kylelewisengineer/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a title="Github" href="https://github.com/bongatoughy">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a title="Angel List" href="https://angel.co/bongatuffy">
          <i className="fa fa-angellist" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
