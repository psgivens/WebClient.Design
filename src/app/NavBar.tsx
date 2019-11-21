import React from 'react';

const NavBar: React.FC = () => {
    return (
      <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="my-important-menu" href="/" >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-menu" id="my-important-menu">
            <div className="navbar-end">
              <a className="navbar-item" href="/Demo">Demo</a>
              <a className="navbar-item" href="/">Home</a>
            </div>
          </div>
        </nav>
      </>
    )
  }

  export default NavBar;
